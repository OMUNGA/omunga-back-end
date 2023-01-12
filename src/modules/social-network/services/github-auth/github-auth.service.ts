import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GithubAuthService {
  constructor(private readonly primas: PrismaService) {}

  async githubLogin(req: any) {
    if (!req.user) {
      return 'No user from github';
    }
    return {
      message: 'User info from github',
      user: req.user,
    };
  }
}
