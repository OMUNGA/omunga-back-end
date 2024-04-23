import { Injectable } from '@nestjs/common';
import { FollowersRepository } from '../followersRepositories';
import { FollowerDTO } from '../../dtos/add-followers.dto';
import { Followers } from '../../entities/followers';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrismaFollowersRepository implements FollowersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async followUser(data: FollowerDTO): Promise<Followers> {
    return await this.prisma.follower.create({
      data: {
        userID: data.userID,
        userTofollowID: data.userIdToFollow,
      },
    });
  }
  async unfollowUser(data: FollowerDTO): Promise<void> {
    await this.prisma.follower.deleteMany({
      where: {
        userID: data.userID,
        userTofollowID: data.userIdToFollow,
      },
    });
  }
  

  async getFollowers(userId: string): Promise<Followers[]> {
    const followers = await this.prisma.follower.findMany({
      where: { userID: userId },
    });
    return followers;
  }

  async getFollowing(userId: string): Promise<Followers[]> {
    return await this.prisma.follower.findMany({
      where: {
        userID: userId,
      },
    });
  }

  async findOne(userId: string, userIdToFollow: string): Promise<Followers> {
    const follwer = await this.prisma.follower.findFirst({
      where: {
        userID: userId,
        userTofollowID: userIdToFollow,
      },
    });

    return follwer;
  }
}
