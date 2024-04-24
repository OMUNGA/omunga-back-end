import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FollowingService } from '../../services/following/following.service';
import { Resolver, Mutation, Args, Query} from '@nestjs/graphql';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { Followers } from '../../entities/followers';

@UseGuards(GqlAuthGuard)
@Resolver()
export class GetFollowingResolver {
  constructor(private readonly followingSerice: FollowingService) {}

  @Query(() => Followers)
  async GetFollowing(@Args('id') id: string) {
    return await this.followingSerice.getFollowing(id);
  }
}


