import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: 'Hello Ammit' });
});

app.post('/post', async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  return res.status(200).send({
    message: 'Hello World from post!',
  });
});

const PORT = 3001;

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
