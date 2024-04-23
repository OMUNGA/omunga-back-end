import { Catch, ArgumentsHost } from "@nestjs/common";
import { GqlExceptionFilter, GqlArgumentsHost } from "@nestjs/graphql";

@Catch()
export class GraphqlExceptionFilter implements GqlExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const ctx = gqlHost.getContext();
    const response = ctx.res;

    const status = exception?.response?.statusCode || 500;
    const message = exception?.response?.message || 'Internal Server Error';

    response.status(status).json({
      message,
      statusCode: status,
    });
  }
}
