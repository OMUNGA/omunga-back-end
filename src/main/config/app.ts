import 'dotenv/config';
import express from 'express';
import 'reflect-metadata';

import Middleware from '../../main/config/middleware/index';
import {AppDataSource} from '../../infra/database/connections'
import DocumentationRouter from '../../../src/main/routes/router'


AppDataSource.initialize().then(()=>{
  console.log("Banco de dados conectado!")
})

const app = express();

const middleware = Middleware
const router = DocumentationRouter

middleware.security(app)
middleware.session(app)
router.documentationAPI(app)

app.use(express.json())
app.get('/', (req, res) => {
  return res.send('Omunga Api - Desenvolvimento: Omunga team 2022');
});

export { app };