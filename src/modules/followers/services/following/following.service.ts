import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class FollowingService {
  constructor(private readonly prisma: PrismaService) {}

  async ShowAllUserfollowing(id: string) {
    return this.prisma.follower.count({
      select: {
        userID: true,
      },
      where: {
        id: id,
        deletedAt: false,
      },
    });
  }
}
