import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddFollowersDTO } from '../../dtos/add-follower.dto';

@Injectable()
export class AddFollowerService {
  constructor(private readonly prisma: PrismaService) {}

  async follower(followers: AddFollowersDTO) {
    return this.prisma.followers.create({ data: followers });
  }
}
