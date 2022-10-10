import CreateUserUseCases from '../../../../usecases/user/create/create.user.usecase';
import {
	IController,
	HttpRequest,
	HttpResponse,
	CREATED,
	serverError,
} from '../presenter/contracts';

export class CreateUserController implements IController {
	constructor(private readonly createUserUseCases: CreateUserUseCases) {}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse<HttpResponse>> {
		try {
			const data = httpRequest.body
			console.log(data)
			await this.createUserUseCases.execute(data);
			return CREATED(data);
		} catch (error: any) {
			return serverError(error);
		}
	}
}
