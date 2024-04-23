import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class RateLimitExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (exception?.message?.includes('Cannot read properties of undefined (reading \'ip\')')) {
      response.status(HttpStatus.TOO_MANY_REQUESTS).send({
        message: 'Limite de requisições excedido. Tente novamente mais tarde.'
      });
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        message: 'Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.'
      });
    }
  }
}
