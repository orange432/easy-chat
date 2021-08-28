import express from 'express';
import cors from 'cors';
import APIRouter from './graphql';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/graphql',APIRouter);
export default app;