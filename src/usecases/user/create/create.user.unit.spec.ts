import CreateUserUseCase from "./create.user.usecase"

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

describe("Unit test create user use case", () => {

    it("should create a user", async () => {

        const UserRepository = MockRepository();
        const user = new CreateUserUseCase(UserRepository);

        const output = await user.execute(input)

        expect(output).toEqual({
            id: output.id,
			firstName: input.firstName,
			lastName: input.lastName,
			email: input.email,
			bio: input.bio || '',
			phone: input.phone || 0,
			password: output.password || '',
			photo: input.photo || '',
        })
    })
})