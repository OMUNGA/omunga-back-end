import UserFactory from "domain/user/factory/user.factory";
import UserRepositoryInterface from "domain/user/repository/user-repository.interface";
import { InputCreateUserDto, OutputCreateUserDto } from "usecase/interactor/dto/create-user-dto";


export default class CreateUserUseCase {
    private userRepository: UserRepositoryInterface;

    constructor(userRepository: UserRepositoryInterface) {
        this.userRepository = userRepository;
    }

    async handle(input: InputCreateUserDto): Promise<OutputCreateUserDto> {
        const user = UserFactory.createUser(input);

        await this.userRepository.create(user);

        return {
            id: user.Props._id || "",
            firstName: user.Props.firstName,
            lastName: user.Props.lastName,
            email: user.Props.email,
            bio: user.Props.bio || "",
            password: user.Props.password,
            phone: user.Props.phone || 0,
            photo: user.Props.photo || ""
        };
    }

}