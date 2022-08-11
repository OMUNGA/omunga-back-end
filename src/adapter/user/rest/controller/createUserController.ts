import CreateUserUseCases from '../../../../usecases/user/create/create.user.usecase';
import {
	Controller,
	HttpRequest,
	HttpResponse,
	CREATED,
	serverError,
} from '../presenter/contracts';

export class CreateUserController implements Controller {
	constructor(private readonly createUserUseCases: CreateUserUseCases) {}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse<HttpResponse>> {
		try {
			const data = httpRequest.body;
			await this.createUserUseCases.execute(data);
			return CREATED(data);
		} catch (error: any) {
			return serverError(error);
		}
	}
}
