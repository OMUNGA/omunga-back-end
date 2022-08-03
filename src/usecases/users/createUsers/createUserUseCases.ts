import UserFactory from 'adapter/users/rest/factory/user.factory';
import ErrorsApp from 'domain/errors/errorsApp';
import UserRepositoryInterface from 'domain/users/repository/user-repository.interface';
import {
	InputCreateUserDto,
	OutputCreateUserDto,
} from 'usecases/dtos/create-user-dto';

export default class CreateUserUseCases {
	constructor(private readonly userRepository: UserRepositoryInterface) {}

	async execute(input: InputCreateUserDto): Promise<OutputCreateUserDto> {
        const alreadyUser = await this.userRepository.findyByEmail(input.email)

        if(alreadyUser){
            throw new ErrorsApp("Usário já existe")
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
			photo: user.Props.photo || '',
		};
	}
}
