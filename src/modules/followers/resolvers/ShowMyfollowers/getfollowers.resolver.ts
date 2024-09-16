import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetFollowersService } from '../../services/ShowMyfollowers/getfollowers.service';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { FollowersResult } from '../../dtos/follow-output';


@Resolver()
export class GetFollowersResolver {
  constructor(private readonly followerService: GetFollowersService) {}

  @Query(() => [FollowersResult])
  async getFollowers(@Args('userID') userID: string):  Promise<FollowersResult[]> {
    return await this.followerService.getFollowers(userID);
  }
}


