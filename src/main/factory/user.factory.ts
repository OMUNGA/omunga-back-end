import { UsersTypeormRepository } from "../../infra/database/typeorm/repositories/usersRepository";
import { CreateUserController } from "../../adapter/user/rest/controller/createUserController";

import CreateUserUseCase from "../../usecases/user/create/create.user.usecase";

export function FactoryUserCreate() {
    const repository = new UsersTypeormRepository()
    const userCreateUsecase = new CreateUserUseCase(repository);
    const userCreateController = new CreateUserController(userCreateUsecase)
    return userCreateController
}