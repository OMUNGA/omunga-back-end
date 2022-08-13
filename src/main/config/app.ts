import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import router from 'main/routes/routes';


const app = router;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Omunga Api - Desenvolvimento: Omunga team 2022');
});

export { app };