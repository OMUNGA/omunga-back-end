import UserFactory from "../../domain/users/factory/user.factory";
import UserRepositoryInterface from "../../domain/users/repository/user-repository.interface";
import { InputCreateUserDto, OutputCreateUserDto } from "./dtos/create-user-dto";


export default class CreateUserUseCases {
	constructor(private readonly userRepository: UserRepositoryInterface) {}

	async execute(input: InputCreateUserDto): Promise<OutputCreateUserDto> {
        const alreadyUser = await this.userRepository.findyByEmail(input.email)

        if(alreadyUser){
					//  por enquanto depois irei substituir por uma class de erro personalisado
            throw new Error("Este usuario ja existe")
        }

		const user = UserFactory.createUser(input);

		await this.userRepository.create(user);

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
