import CreateUserUseCase from "../../../../usecases/user/create/create.user.usecase";
import { CreateUserController } from "./createUserController";

const input = {
    firstName: "Ana",
    lastName: "Afonso",
    email: "anaafonso@gmail.com",
    password: "12345",
    bio: "my life",
    phone: 932456923,
    photo: "exemplo2.png"
}

const MockRepository = () => {
    return {
        create: jest.fn(),
        update: jest.fn(),
        find: jest.fn(),
        findAll: jest.fn(),
        Search: jest.fn(),
        findyByEmail: jest.fn(),
    };
};

const MockHandler = () => {
    return {
        statusCode: 201,
        body: input
    }
}

describe("Unit test create user controller", () => {
    it("should controller create user ", async () => {

        const UserRepository = MockRepository();
        const UserControllerHandler = MockHandler()

        const userCreateUsecase = new CreateUserUseCase(UserRepository);
        const userCreateController = new CreateUserController(userCreateUsecase)

        const output = await userCreateController.handle(UserControllerHandler);

        expect(output.statusCode).toEqual(201);

    });
});