import 'reflect-metadata';
import bodyParser from 'body-parser';
import compression from 'compression';
import express, { Application, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../swagger';
import config from './config/config';
import './database/connectDb';
import ErrorHandler from './middlewares/ErrorHandler';
import routes from './routes';
import cors from './security/CorsProtection';
import rateLimiter from './security/RateLimiter';
import tooBusy from './security/Toobusy';
import { NotFoundError } from './utils/ApiError';

const app: Application = express();

app.use(cors);
app.use(bodyParser.json({ limit: '50kb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(rateLimiter);
app.use(tooBusy);

app.use(compression());

app.use('/api/v1', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((req: Request, res: Response, next: NextFunction) => next(new NotFoundError(req.path)));

app.use(ErrorHandler.handle());

const startServer = () => {
  try {
    app.listen(config.PORT, (): void => {
      console.log(`Connected successfully on port ${config.PORT}`);
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
  }
};

startServer();

ErrorHandler.initializeUnhandledException();
