/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
import { SuccessResponse } from '@utils/util';

type AsyncFunction = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const asyncWrapper = (handler: AsyncFunction) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: SuccessResponse<any> = await handler(req, res, next);
      res.status(response.statusCode).send({
        data: response.data,
      });
    } catch (error) {
      next(error);
    }
  };
};
