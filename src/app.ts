import express, { Request, Response } from 'express';
import getOngsController from './controllers/ongs/GetOngsController';

const app = express();
app.use(express.json());

app.get('/api/v1/ongs', async (req: Request, res: Response) => {
  return await getOngsController(req, res);
});

export { app };