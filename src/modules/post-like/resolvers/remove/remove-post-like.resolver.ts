import { Controller, Param, Delete, UseGuards } from '@nestjs/common';

import { RemovePostLikeService } from '../../services/remove/remove-post-like.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../../..//modules/account/guards/jwt-auth.guard';
import { PostLikes } from '../../entities/post-like.entity';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';

@UseGuards(GqlAuthGuard)
@Resolver('post-like')
export class RemovePostLikeResolver {
  constructor(private postLikeService: RemovePostLikeService) {}

  @UseGuards(GqlAuthGuard,GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => PostLikes)
  async removePosttLike(@Args('id', { type: () => String }) id: string) {
    return await this.postLikeService.remove(id);
  }
}
