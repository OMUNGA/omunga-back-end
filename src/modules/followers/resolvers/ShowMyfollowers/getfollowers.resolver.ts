import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetFollowersService } from '../../services/ShowMyfollowers/getfollowers.service';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserOutput } from '../../../../modules/account/dtos/user';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { Followers } from '../../entities/followers';


@Resolver()
export class GetFollowersResolver {
  constructor(private readonly followerService: GetFollowersService) {}

  @Query(() => [Followers])
  async getFollowers(@Args('id') id: string):  Promise<Followers[]> {
    return await this.followerService.getFollowers(id);
  }
}


