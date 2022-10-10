import { userRouter } from "../../adapter/user/rest/router/user.router";
import { Router } from "express";

const routes = Router()
routes.use("/user", userRouter)

export default routes