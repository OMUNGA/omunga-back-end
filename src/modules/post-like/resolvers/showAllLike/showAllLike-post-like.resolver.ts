import { Controller, Get, Param, UseGuards } from '@nestjs/common';

import { showAllTheLikesPostLikeService } from '../../services/showAllLike/showAllLike-post-like.service';
import { PostLikes } from '../../entities/post-like.entity';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ShowAllLikeOfPostLikeResolver {
  constructor(private postLikeService: showAllTheLikesPostLikeService) {}

  @Query(() => Number)
  async ShowPostAllPostLike(@Args('id') id: string) {
    return await this.postLikeService.showAllTheLikesOfThePost(id);
  }
}
