import bodyParser from 'body-parser';
import compression from 'compression';
import express, { Application, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import http from 'http';
import { swaggerDocument } from './../swagger';
import config from './config/config';
import './database/connectDb';
import ErrorHandler from './middlewares/ErrorHandler';
import routes from './routes';
import cors from './security/CorsProtection';
import HttpsEnforcer from './security/HttpsEnforcer';
import rateLimiter from './security/RateLimiter';
import tooBusy from './security/Toobusy';
import { ApiError, NotFoundError } from './utils/ApiError';
const xss = require('xss-clean');
const swaggerUi = require('swagger-ui-express');

const app: Application = express();

app.use(cors);
app.use(xss());
app.use(bodyParser.json({ limit: '50kb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(rateLimiter);
app.use(tooBusy);
app.use(HttpsEnforcer);

app.use(compression());

app.use('/api/v1', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((req: Request, res: Response, next: NextFunction) => next(new NotFoundError(req.path)));

app.use(ErrorHandler.handle());

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).send({
    success: false,
    message: err.message,
    stack: err.stack,
  });
});

let server: http.Server;

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
