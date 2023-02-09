import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FollowersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const followers = await this.prisma.follower.findMany({
      where: { deletedAt: false },
    });
    const countFollowers = await this.prisma.follower.count({
      where: { deletedAt: false },
    });

    return { followers, countFollowers };
  }
}
