import { UserRouter } from "../../adapter/user/rest/router/users.router";
import express from "express";
import { FactoryUserCreate } from "../../main/factory/user.factory";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const router = express();
const userController = FactoryUserCreate();
const userCreateRouter = UserRouter(router, userController)


const BASEPATH = process.env.BASE_PATH;

class Router {

    public documentationAPI (app: express.Application):void {
        const swaggerDefinition = {
          openapi: '3.0.0',
          info: {
            title: 'DOCUMENTATION API OMUNGA',
            version: '1.0.0',
          },
        };
    
        const options = {
          swaggerDefinition,
          // Paths to files containing OpenAPI definitions
          apis: [
                "src/adapter/*/rest/router/*.router.ts",
                "src/adapter/user/rest/router/users.router.ts"
              ]
        };
    
        const swaggerSpec = swaggerJSDoc(options);
        app.use(`${BASEPATH}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
      }

    public routes(app: express.Application): void {

        app.use(`${BASEPATH}`, userCreateRouter)

    }
}

export default new Router();