/* eslint-disable @typescript-eslint/ban-types */
import { PassportSerializer } from '@nestjs/passport';
import { PrismaClient } from '@prisma/client';

export class SessionSerializer extends PassportSerializer {
  constructor(private prisma: PrismaClient) {
    super();
  }

  serializeUser(user: any, done: Function) {
    done(null, user);
  }
  deserializeUser(payload: any, done: Function) {
    const user = this.prisma.user.findUnique(payload.id);
    return user ? done(null, user) : done(null, null);
  }
}
