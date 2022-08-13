import { UserRouter } from "adapter/user/rest/router/users.router";
import express from "express";
import { FactoryUserCreate } from "main/factory/user.factory";


const router = express();
const userController = FactoryUserCreate();
const userCreateRouter = new UserRouter(router, userController)


router.use("/api", userCreateRouter.CreatedUser)

export default router;