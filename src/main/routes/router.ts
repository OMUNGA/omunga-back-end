import { UserRouter } from "../../adapter/user/rest/router/users.router";
import express from "express";
import { FactoryUserCreate } from "../../main/factory/user.factory";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import fg from 'fast-glob'
import { readdirSync } from "graceful-fs";

const BASEPATH = process.env.BASE_PATH;

class DocumentationRouter {

  public documentationAPI(app: express.Application): void {
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

  public ModulesRouter(app: express.Application): void {


    const BASEPATH = process.env.BASE_PATH;


    //   fg.sync('../routes').map(async filename =>{
    //     const cam = ( await  import (`${__dirname}/../../routes`)).default(router)
    //     console.log("vindo das rotas", cam)

    //     })
    readdirSync(`${__dirname}../../../routes`).map(async file => {
      (await import(`../routes/${file}`)).default(router)
    })


  }
}

export default new DocumentationRouter;