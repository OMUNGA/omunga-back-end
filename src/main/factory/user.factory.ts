import { CreateUserController } from "../../adapter/user/rest/controller/createUserController";
import { CreateUserRepositoryInMemmory } from "../../infra/database/typeorm/repositories/inMemmory/createUserRepository";
import CreateUserUseCase from "../../usecases/user/create/create.user.usecase";

export function FactoryUserCreate() {
    const repository = new CreateUserRepositoryInMemmory()
    const userCreateUsecase = new CreateUserUseCase(repository);
    const userCreateController = new CreateUserController(userCreateUsecase)
    return userCreateController
}