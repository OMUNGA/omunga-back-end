import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { AddFollowerDTO } from '../../dtos/add-followers.dto';

@Injectable()
export class AddFollowerService {
  constructor(private readonly prisma: PrismaService) {}

  async followUser(data: AddFollowerDTO) {
    try {
      if (!data.userId) {
        throw new HttpException(
          'Usuário não está logado',
          HttpStatus.UNAUTHORIZED,
        );
      }

      const followrs = await this.prisma.follower.create({
        data: {
          userID: data.userId,
          userTofollowID: data.userIdToFollow,
        },
      });
      return followrs;
    } catch (error) {
      throw error;
    }
  }
}
