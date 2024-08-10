import 'dotenv/config'
import express from 'express';
import ongs from '@drivers/express/routes/ongsRoutes';

const app = express();
app.use(express.json());

app.use('/api/v1', ongs);

export { app };
