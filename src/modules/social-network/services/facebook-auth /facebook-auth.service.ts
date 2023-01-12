import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FacebookAuthService {
  constructor(private readonly primas: PrismaService) {}

  async facebookLogin(req: any) {
    if (!req.user) {
      return 'No user from Facebook';
    }
    return {
      message: 'User info from Facebook',
      user: req.user,
    };
  }
}
