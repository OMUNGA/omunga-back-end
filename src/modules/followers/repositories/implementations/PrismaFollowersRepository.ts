import { PrismaService } from '../../../../prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { FollowersRepository } from '../followersRepositories';
import { AddFollowerDTO } from '../../dtos/add-followers.dto';

@Injectable()
export class PrismaFollowersRepository implements FollowersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async followUser(userID: string, data: AddFollowerDTO): Promise<void> {
    await this.prisma.follower.create({
      data: {
        userID: userID,
        userTofollowID: data.userIdToFollow,
      },
    });
  }
  async unfollowUser(userId: string, userIdToUnfollow: string): Promise<void> {
    await this.prisma.follower.deleteMany({
      where: {
        userID: userId,
        userTofollowID: userIdToUnfollow,
      },
    });
  }

  async showMyFollower(userId: string): Promise<number> {
    const followers = this.prisma.follower.count({
      where: { userTofollowID: userId },
    });

    return followers;
  }
}
