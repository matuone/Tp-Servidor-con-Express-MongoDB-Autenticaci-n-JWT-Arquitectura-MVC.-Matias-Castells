import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/mongodb.js';
import authRouter from './routes/authRouter.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);

app.get('/api/health', function (req, res) {
  res.json({ status: 'ok' });
});


const PORT = process.env.PORT || 5000;

connectDB().then(function () {
  app.listen(PORT, function () {
    console.log(`🚀 Servidor en escucha puerto ${PORT}`);
  });
});
