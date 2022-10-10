import express, { Router } from "express";
import { FactoryUserCreate } from "../../../../main/factory/user.factory";
import { IController } from "../presenter/contracts";


export function UserRouter(router: Router, Icontroller: IController): express.Router {
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
    router.post('/usuario', FactoryUserCreate)

    

    return router
}