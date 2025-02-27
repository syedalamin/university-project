import mongoose from 'mongoose';
import { TErrorSource, TGenericErrorResponse } from '../interface/error';
import status from 'http-status';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSource = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];

  const statusCode = status.NOT_FOUND;
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleCastError;
