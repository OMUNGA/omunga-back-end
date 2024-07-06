import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetFollowersService } from '../../services/ShowMyfollowers/getfollowers.service';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { Followers } from '../../entities/followers';


@Resolver()
export class GetFollowersResolver {
  constructor(private readonly followerService: GetFollowersService) {}

  @Query(() => [Followers])
  async getFollowers(@Args('id') id: string):  Promise<Followers[]> {
    return await this.followerService.getFollowers(id);
  }
}


