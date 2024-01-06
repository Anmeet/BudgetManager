import { NextFunction, Request, Response } from 'express';
import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';

export default class AuthController {
  constructor() {}
  static signIn = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const response = await res.send({
      success: true,
      message: 'Successfully signed in!',
    });

    return new SuccessResponse(response, 200);
  });

  static signUp = () => {};

  static signOut = () => {};

  static test = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const response = await res.send({
      success: true,
      message: 'Successfully signed in!',
    });

    return new SuccessResponse(response, 200);
  });
}
