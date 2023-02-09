import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateFollowersDTO } from '../../dtos/update-follower.dto';

@Injectable()
export class UpdateFollowersService {
  constructor(private readonly prisma: PrismaService) {}

  update(id: string, updateFollowers: UpdateFollowersDTO) {
    return this.prisma.follower.update({
      where: { id: id },
      data: updateFollowers,
    });
  }
}
