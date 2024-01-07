import { Request, Response, NextFunction, RequestHandler } from 'express';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { BadRequestError } from '@/exceptions/HttpException';

export default class RequestValidator {
  static validate = <T extends object>(
    classInstance: ClassConstructor<T>,
    value: string | 'body' | 'query' | 'params' = 'body',
    skipMissingProperties = false,
    whitelist = true,
    forbidNonWhitelisted = true,
  ): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, security/detect-object-injection
      const convertedObject = plainToInstance(classInstance, (req as any)[value]);
      await validate(convertedObject, { skipMissingProperties, whitelist, forbidNonWhitelisted }).then(
        (errors: ValidationError[]) => {
          if (errors.length > 0) {
            let rawErrors: string[] = [];
            for (const errorItem of errors) {
              rawErrors = rawErrors.concat(...rawErrors, Object.values(errorItem.constraints ?? []));
            }
            const message = errors.map((error: ValidationError) => Object.values(error.constraints ?? {})).join(', ');
            next(new BadRequestError(message, rawErrors));
          } else {
            next();
          }
        },
      );
      next();
    };
  };
}
