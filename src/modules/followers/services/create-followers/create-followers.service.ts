import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddFollowersDTO } from '../../dtos/add-follower.dto';

@Injectable()
export class CreateFollowersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(followers: AddFollowersDTO) {
    return this.prisma.followers.create({ data: followers });
  }
}
