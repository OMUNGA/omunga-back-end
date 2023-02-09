import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RemoveFollowerService {
  constructor(private readonly prisma: PrismaService) {}

  remove(id: string) {
    return this.prisma.follower.update({
      where: { id: id },
      data: { deletedAt: true },
    });
  }
}
