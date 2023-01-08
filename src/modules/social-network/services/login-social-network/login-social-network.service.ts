import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoginSocialNetworkService {
  constructor(private readonly primas: PrismaService) {}

  async googleLogin(req: any) {
    if (!req.user) {
      return 'No user from google';
    }
    return {
      message: 'User info from google',
      user: req.user,
    };
  }
}
