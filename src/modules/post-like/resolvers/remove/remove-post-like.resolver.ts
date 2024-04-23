import { Controller, Param, Delete, UseGuards } from '@nestjs/common';

import { RemovePostLikeService } from '../../services/remove/remove-post-like.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/modules/account/guards/jwt-auth.guard';
import { PostLikes } from '../../entities/post-like.entity';

@UseGuards(GqlAuthGuard)
@Resolver('post-like')
export class RemovePostLikeResolver {
  constructor(private postLikeService: RemovePostLikeService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => PostLikes)
  async removePosttLike(@Args('id', { type: () => String }) id: string) {
    return await this.postLikeService.remove(id);
  }
}
