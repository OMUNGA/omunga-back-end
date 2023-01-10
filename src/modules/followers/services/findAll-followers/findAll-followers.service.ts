import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindAllFollowersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.followers.findMany({
      where: { deletedAt: false },
    });
  }
}
