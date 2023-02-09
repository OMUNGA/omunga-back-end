import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const Me = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Request['user'] => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.user;
  },
);
