import express, { IRouter } from "express";
import { IController } from "../presenter/contracts";

export class UserRouter {
    private route: express.IRouter;
    private Icontroller: IController;

    constructor(router: IRouter, Icontroller: IController) {
        this.route = router;
        this.Icontroller = Icontroller;
    }

    CreatedUser(): express.Router {
        this.route.post('/user', this.Icontroller.handle)
        return this.route
    }

}