import { Router, Express } from "express"
import fg from 'fast-glob'
import { readdirSync } from "graceful-fs";
import tesf from '../routes/routes'

const BASEPATH = process.env.BASE_PATH;

export const setupRoutes = (app: Express ): void =>{
    const router = Router()
    app.use(`/api`, router)

//   fg.sync('../routes').map(async filename =>{
//     const cam = ( await  import (`${__dirname}/../../routes`)).default(router)
//     console.log("vindo das rotas", cam)
     
//     })
    readdirSync(`${__dirname}../../../routes`).map(async file =>{
        (await import (`../routes/${file}`)).default(router)
    })

}