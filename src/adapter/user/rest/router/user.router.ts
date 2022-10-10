import { Router } from "express";
import { adapterRoute } from "../../../../main/adapters/express-router";
import { FactoryUserCreate } from "../../../../main/factory/user.factory";

const userRouter = Router()
userRouter.post("/", adapterRoute(FactoryUserCreate()))

export {userRouter}