import 'dotenv/config';
import express from 'express';
import 'reflect-metadata';

import Middleware from '../../main/config/middleware/index';
import {AppDataSource} from '../../infra/database/connections'
import { setupRoutes } from './routes';
import routes from '../routes/routes'


AppDataSource.initialize().then(()=>{
  console.log("Banco de dados conectado!")
})

const app = express();
app.use(routes)

// console.log(setupRoutes(app))

// const middleware = Middleware
// const router = Router

// middleware.security(app)
// middleware.session(app)
// router.documentationAPI(app)
// router.routes(app)

app.use(express.json())
app.get('/', (req, res) => {
  return res.send('Omunga Api - Desenvolvimento: Omunga team 2022');
});

export { app };