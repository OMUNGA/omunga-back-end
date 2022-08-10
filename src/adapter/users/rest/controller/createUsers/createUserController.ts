import CreateUserUseCases from 'usecases/users/createUsers/createUserUseCases';
import {
	Controller,
	HttpRequest,
	HttpResponse,
	Ok,
	serverError,
} from '../../presenter/contracts';

export class CreateUserControllers implements Controller {
	constructor(private readonly createUserUseCases: CreateUserUseCases) {}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse<HttpResponse>> {
		try {
			const data = httpRequest.body;
			await this.createUserUseCases.execute(data);
			return Ok(data);
		} catch (error) {
			return serverError(error);
		}
	}
}
