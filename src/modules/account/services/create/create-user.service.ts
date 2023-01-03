import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from '../../dtos/Create-user.dto';

@Injectable()
export class CreateUserService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDTO: CreateUserDTO) {
    return this.prisma.comment.create({
      data: createUserDTO,
    });
  }
}
