import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import './database/connectDb';
import { ApiError, NotFoundError } from './utils/ApiError';
import { asyncWrapper } from './utils/asyncWrapper';
import { StatusCodes } from 'http-status-codes';
import RequestValidator from './utils/RequestValidator';
import { CreateUserRequest } from './requests/CreateUserRequest';
import ErrorHandler from './utils/ErrorHandler';
import config from './config/config';
import helmet from 'helmet';
import cors from './security/CorsProtection';
import rateLimiter from './security/RateLimiter';
import tooBusy from './security/Toobusy';
import HttpsEnforcer from './security/HttpsEnforcer';
const xss = require('xss-clean');
import compression from 'compression';
const swaggerUi = require('swagger-ui-express');
import { swaggerDocument } from './../swagger';

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

app.get(
  '/protected',
  asyncWrapper(async (req: Request, res: Response) => {
    await customFunction();
  }),
);

const customFunction = async () => {
  throw new ApiError(StatusCodes.BAD_REQUEST, 'This is just a bad request!');
};

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: 'Hello Ammit' });
});

app.post('/post', async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  return res.status(200).send({
    message: 'Hello World from post!',
  });
});

app.post('/create-user', RequestValidator.validate(CreateUserRequest), async (req: Request, res: Response) => {
  res.status(200).send({
    message: 'Hello World from post!',
  });
});

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

try {
  app.listen(config.PORT, (): void => {
    console.log(`Connected successfully on port ${config.PORT}`);
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}

process.on('unhandledRejection', (reason: Error, promise: Promise<void>) => {
  console.log(reason.name, reason.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  process.exit(1);
  throw reason;
});

process.on('uncaughtException', (err: Error) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');

  process.exit(1);
});
