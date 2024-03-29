import { ServiceUnavailableError } from '@/exceptions/HttpException';
import { NextFunction, Request, Response } from 'express';
import tooBusy from 'toobusy-js';

export default function (req: Request, res: Response, next: NextFunction) {
  if (tooBusy()) {
    new ServiceUnavailableError('Server too busy!');
  } else {
    next();
  }
}

// tooBusy.onLag(function (currentLag) {
//   console.error('Event loop lag detected! Latency: ' + currentLag + 'ms');
// });
