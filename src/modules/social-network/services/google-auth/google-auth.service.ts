import { Injectable, NotFoundException } from '@nestjs/common';
import { messages } from '../../../../../shared/errorsMessages';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class GoogleAuthService {
  constructor(private readonly primas: PrismaService) {}

  async googleLogin(req: any) {
    try {
      if (!req.user) {
        throw new NotFoundException('Ups, nenhum usuário encontrado do Google');
      }
      return {
        message: 'User info from google',
        user: req.user,
      };
    } catch (error) {
       throw new Error(messages.InternalServerError);
    }
  }
}
