import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FollowingService {
  constructor(private readonly prisma: PrismaService) {}

  async ShowAllUserfollowing(id: string) {
    return this.prisma.followers.count({
      select: {
        userID: true,
      },
      where: {
        userfollowID: id,
        deletedAt: false,
      },
    });
  }
}
