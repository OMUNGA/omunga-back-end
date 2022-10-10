import UserFactory from "../../../domain/users/factory/user.factory";
import UserRepositoryInterface from "../../../domain/users/repository/user-repository.interface";
import { InputCreateUserDto, OutputCreateUserDto } from "./create.user.dto";


export default class CreateUserUseCase {
	constructor(private readonly userRepository: UserRepositoryInterface) {}

	async execute(input: InputCreateUserDto): Promise<OutputCreateUserDto> {
      console.log("Vindo do DTO",input)

		const user = UserFactory.createUser(input);

		await this.userRepository.create(user.Props);

		return {
			id: user.Props._id || '',
			firstName: user.Props.firstName,
			lastName: user.Props.lastName,
			email: user.Props.email,
			bio: user.Props.bio || '',
			phone: user.Props.phone || 0,
			password: user.Props.password || '',
			photo: user.Props.photo || '',
		};
	}
}
