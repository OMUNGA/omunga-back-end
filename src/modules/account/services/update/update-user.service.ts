import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDTO } from '../../dtos/Update-user.dto ';

@Injectable()
export class UpdateUserService {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, updateUserDTO: UpdateUserDTO) {
    return this.prisma.user.update({
      where: { userID: id },
      data: updateUserDTO,
    });
  }
}
