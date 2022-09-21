import 'dotenv/config';
import express from 'express';
import 'reflect-metadata';

import Router from '../../main/routes/router';
import Middleware from '../../main/config/middleware/index';
import createConnection from '../../infra/database/connections'

createConnection()
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