import { TErrorSource, TGenericErrorResponse } from '../interface/error';
import status from 'http-status';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
    const match = err.message.match(/"([^"]*)"/)
    const extractedMsg = match && match[1]
  const errorSources: TErrorSource = [
    {
      path: '',
      message: `${extractedMsg} is already exists`,
    },
  ];

  const statusCode = status.NOT_FOUND;
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleDuplicateError;
