import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { AddFollowerDTO } from '../../dtos/add-followers.dto';

@Injectable()
export class AddFollowerService {
  constructor(private readonly prisma: PrismaService) {}

  async follower(followerDTO: AddFollowerDTO) {
    const followrs = await this.prisma.followers.create({ data: followerDTO });
    return followrs;
  }
}
