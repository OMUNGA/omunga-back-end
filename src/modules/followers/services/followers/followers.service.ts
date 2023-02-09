import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FollowersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const followers = await this.prisma.followers.findMany({
      where: { deletedAt: false },
    });
    const countFollowers = await this.prisma.followers.count({
      where: { deletedAt: false },
    });

    return { followers, countFollowers };
  }
}
