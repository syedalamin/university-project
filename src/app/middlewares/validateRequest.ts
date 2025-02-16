import { AnyZodObject } from 'zod';
import  { NextFunction, Request, response, Response } from 'express';
const validateRequest = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      // if( everything all right  next () )
      try {
        await schema.parseAsync({
          body: req.body,
        });
        next();
      } catch (err) {
        next(err);
      }
    };
  };

  export default validateRequest