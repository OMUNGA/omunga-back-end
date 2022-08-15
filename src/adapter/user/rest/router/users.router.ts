import express, { IRouter } from "express";
import { IController } from "../presenter/contracts";


export function UserRouter(router: IRouter, Icontroller: IController): express.Router {
    /**
     * @openapi
     * /user:
     *   post:
     *     tags: [User]
     *     summary: create User.
     *     description: A create User!
     *     responses:
     *       201:
     *         description: Returns a mysterious string.
     */
    router.post('/user', Icontroller.handle)



    
    return router
}