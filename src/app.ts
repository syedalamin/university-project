import express, { Application,  Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// all routes 
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  res.send('Hello World!');
}
// test route
app.get('/', test );

// global error
app.use(globalErrorHandler);
app.use(notFound);

export default app;
