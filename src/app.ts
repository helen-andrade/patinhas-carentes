import 'dotenv/config'
import "reflect-metadata";
import express, { Request, Response } from 'express';
import { AppDataSource } from '@data/data-source';
import ongs from '@routes/ongsRoutes';

const app = express();
app.use(express.json());

if (!process.env.DB_HOST || !process.env.DB_PORT || !process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_DATABASE) {
  throw new Error("Missing required database configuration in environment variables.");
}
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.error("Error during Data Source initialization:", error));

app.use('/api/v1', ongs);

export { app };
