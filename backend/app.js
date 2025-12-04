import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './databse/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservastionRoute.js';

const app = express();

dotenv.config({ path: './config/config.env' });

app.use(
  cors({
    origin: 'https://resturant-theta-swart.vercel.app',
    methods: ['POST'],
    credentials: true
  })
);
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/reservation', reservationRouter);

dbConnection();

app.use(errorMiddleware);
export default app;
