import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class FacebookAuthService {
  constructor(private readonly primas: PrismaService) {}

  async facebookLogin(req: any) {
    if (!req.user) {
      throw new NotFoundException('Ups, nenhum usuário encontrado do facebook');
    }
    return {
      message: 'User info from Facebook',
      user: req.user,
    };
  }
}
