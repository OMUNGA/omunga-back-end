import CreateUserUseCases from '../../../../usecases/user/create/create.user.usecase';
import {
	Controller,
	HttpRequest,
	HttpResponse,
	Ok,
	serverError,
} from '../presenter/contracts';

export class CreateUserControllers implements Controller {
	constructor(private readonly createUserUseCases: CreateUserUseCases) {}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse<HttpResponse>> {
		try {
			const data = httpRequest.body;
			await this.createUserUseCases.execute(data);
			return Ok(data);
		} catch (error: any) {
			return serverError(error);
		}
	}
}
