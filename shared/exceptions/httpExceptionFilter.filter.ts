import { Catch, HttpException, ArgumentsHost } from "@nestjs/common";
import { GqlExceptionFilter, GqlArgumentsHost } from "@nestjs/graphql";

@Catch(HttpException)
export class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    return exception;
  }
}

