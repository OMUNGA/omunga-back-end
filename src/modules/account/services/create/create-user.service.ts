import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from '../../dtos/Create-user.dto';
import { hashSync } from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDTO: CreateUserDTO) {
    createUserDTO.password = await hashSync(createUserDTO.password, 12);
    return this.prisma.user.create({
      data: createUserDTO,
    });
  }
}
