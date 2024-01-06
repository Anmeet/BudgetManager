import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

export default class ErrorHandler {
  static handleError = () => {
    return async (err: ApiError, req: Request, res: Response, next: NextFunction) => {
      try {
        const statusCode = err.statusCode || 500;
        res.status(statusCode).send({
          success: false,
          message: err.message,
          rawErrors: err.rawErrors ?? [],
          stack: err.stack,
        });
      } catch (error) {
        next(error);
      }
    };
  };

  static initializeUnhandledException = () => {
    process.on('unhandledRejection', (reason: Error) => {
      console.log(reason.name, reason.message);
      console.log('UNHANDLED REJECTION! 💥 Shutting down...');
      throw reason;
    });

    process.on('uncaughtException', (err: Error) => {
      console.log(err.name, err.message);
      console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
      process.exit(1);
    });
  };
}
