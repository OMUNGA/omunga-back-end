import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class GithubAuthService {
  constructor(private readonly primas: PrismaService) {}

  async githubLogin(req: any) {
    try {
      if (!req.user) {
        throw new NotFoundException('Ups, nenhum usuário encontrado do github');
      }
      return {
        message: 'User info from github',
        user: req.user,
      };
    } catch (error) {
      return { error: error.message };
    }
  }
}
