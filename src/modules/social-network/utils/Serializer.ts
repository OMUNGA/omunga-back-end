import { PassportSerializer } from '@nestjs/passport';
import { PrismaClient } from '@prisma/client';

export class SessionSerializer extends PassportSerializer {
  constructor(private prisma: PrismaClient) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  serializeUser(user: any, done: Function) {
    done(null, user);
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  deserializeUser(payload: any, done: Function) {
    const user = this.prisma.user.findUnique(payload.user.id);
    return user ? done(null, user) : done(null, null);
  }
}
