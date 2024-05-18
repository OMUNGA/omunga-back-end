import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FollowingService } from '../../services/following/following.service';
import { Resolver, Mutation, Args, Query} from '@nestjs/graphql';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { Followers } from '../../entities/followers';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';

@Resolver()
export class GetFollowingResolver {
  constructor(private readonly followingSerice: FollowingService) {}
  
  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Query(() => Followers)
  async GetFollowing(@Args('id') id: string) {
    return await this.followingSerice.getFollowing(id);
  }
}


