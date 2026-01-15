import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config'; // Carga las variables del archivo .env

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();

// Uso de la variable de entorno para el puerto
const PORT = process.env.PORT || 8080;

// Uso de la variable de entorno para la conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB con éxito"))
    .catch(err => console.error("Error conectando a MongoDB:", err));

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
