import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/mongodb.js';
import authRouter from './routes/authRouter.js';

dotenv.config();

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRouter);

// Endpoint de prueba
app.get('/api/health', function (req, res) {
  res.json({ status: 'ok' });
});

// Puerto
const PORT = process.env.PORT || 5000;

// Conexión y arranque del servidor
connectDB().then(function () {
  app.listen(PORT, function () {
    console.log(`🚀 Servidor en escucha puerto ${PORT}`);
  });
});
