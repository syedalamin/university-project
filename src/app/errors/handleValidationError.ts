import status from 'http-status';
import mongoose from 'mongoose';
import { TErrorSource, TGenericErrorResponse } from '../interface/error';


const handleValidationError = (err: mongoose.Error.ValidationError) : TGenericErrorResponse => {
  const errorSources: TErrorSource = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );



  const statusCode = status.NOT_FOUND;
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleValidationError;
