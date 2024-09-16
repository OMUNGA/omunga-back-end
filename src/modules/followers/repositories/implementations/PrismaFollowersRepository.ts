import { Injectable } from '@nestjs/common';
import { FollowersRepository } from '../followersRepositories';
import { FollowerDTO } from '../../dtos/add-followers.dto';
import { PrismaService } from '../../../../prisma/prisma.service';
import { Followers } from '../../entities/followers';
import { FollowersResult, FollowingResult } from '../../dtos/follow-output';

@Injectable()
export class PrismaFollowersRepository implements FollowersRepository {
  constructor(private readonly prisma: PrismaService) {}


  async followUser(userID: string, data: FollowerDTO): Promise<Followers> {
    const follower = await this.prisma.follow.create({
      data: {
        followerId: userID,
        followingId: data.userToFollowId,
      },
    });

    return follower;
    
  }

  async unfollowUser( followID: string): Promise<{ msg: string }> {
    await this.prisma.follow.deleteMany({
      where: {
       id: followID
      },
    });
    return { msg: 'User unfollowed successfully' };
    
  }
  

  async getFollowers(userId: string): Promise<FollowersResult[]> {
    const followers = await this.prisma.follow.findMany({
      where: { followingId: userId }, 
      select: {
        id: true,
        createdAt: true,
        deletedAt: true,
        followerId: true,
        followingId: true,
        updatedAt: true,
        followerUser: {
          select: {
            id: true,
            username: true,
            name: true,
            photo: true,
          },
        },
      },
    });
    return followers;
  }

  async getAllFollowing(username: string): Promise<FollowingResult[]> {
    const followings = await this.prisma.follow.findMany({
      where: {
        followerUser: {
          username: {
            equals: username,
            mode: 'insensitive',
          },
        },
      },
      select: {
        id: true,
        createdAt: true,
        deletedAt: true,
        followerId: true,
        followingId: true,
        updatedAt: true,
        followingUser: {
          select: {
            id: true,
            username: true,
            photo: true,
            name: true,
          },
        },
      },
    });

    return followings

  }

  async findOne(currentUser: string,userToUnfollow: string,): Promise<Followers> {
    const follower =  await this.prisma.follow.findFirst({
      where: {
        followerId: currentUser,
        followingId: userToUnfollow,
      },
    });

    return follower

  }
}
