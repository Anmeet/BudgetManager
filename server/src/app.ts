import config from '@config/config';
import ErrorHandler from '@/middlewares/error.middleware';
import cors from '@security/CorsProtection';
import rateLimiter from '@security/RateLimiter';
import tooBusy from '@security/Toobusy';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from 'express';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import hpp from 'hpp';
import 'reflect-metadata';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import xss from 'xss-clean';
import { startConnection } from '@databases/connectDb';
import { Logger } from '@utils/logger';
import { NotFoundError } from '@exceptions/HttpException';
import { Routes } from '@interfaces/routes.interface';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = process.env.NODE_ENV || 'development';
    this.port = config.PORT;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`=================================`);
      console.log(`======= ENV: ${this.env} =======`);
      console.log(`🚀 App listening on the port ${this.port}`);
      console.log(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }
  private connectToDatabase() {
    startConnection();
  }

  private initializeMiddlewares() {
    this.app.use(Logger.getHttpLoggerInstance());
    this.app.use(cors);
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(xss());
    this.app.use(ExpressMongoSanitize());
    this.app.use(compression());
    this.app.use(express.json({ limit: '50kb' }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(tooBusy);
    this.app.use(rateLimiter);
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'API Documentation for the application',
          contact: {
            name: 'Amit Bhandari',
            email: 'anmeet619@gmail.com',
            url: 'https://amit-bhandari.netlify.app/',
          },
          license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
          },
        },
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  private initializeErrorHandling() {
    this.app.use((req: Request, res: Response, next: NextFunction) => next(new NotFoundError(req.path)));
    this.app.use(ErrorHandler.handleError());
  }
}

export default App;
