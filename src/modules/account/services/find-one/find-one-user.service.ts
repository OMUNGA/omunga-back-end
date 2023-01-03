import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindOneService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { userID: id } });
  }
}
