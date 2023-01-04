import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteUserService {
  constructor(private readonly prisma: PrismaService) {}

  async remove(id: string) {
    return this.prisma.user.update({
      where: { userID: id },
      data: { deletedAt: true },
    });
  }
}
