import 'dotenv/config';
import express from 'express';
import 'reflect-metadata'

import Router from '../../main/routes/router';
import Middleware from '../../main/config/middleware/index';
import { AppDataSource } from '../../infra/database/connections';

AppDataSource.initialize().then(()=>{
  console.log("Banco conectado")
})

const app = express();

const middleware = Middleware
const router = Router

middleware.security(app)  
middleware.session(app)
router.documentationAPI(app)
router.routes(app)



app.get('/', (req, res) => {
  return res.send('Omunga Api - Desenvolvimento: Omunga team 2022');
});


export { app };