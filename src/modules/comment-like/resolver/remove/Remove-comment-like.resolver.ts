import { Controller, Param, Delete, UseGuards } from '@nestjs/common';
import { RemoveCommentLikeService } from '../../services/remove/Remove-comment-like.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/modules/account/guards/jwt-auth.guard';
import { CommentLikes } from '../../entities/comment-like.entity';

@UseGuards(GqlAuthGuard)
@Resolver('comment-like')
export class RemoveCommentLikeResolver {
  constructor(private commentLikeService: RemoveCommentLikeService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(()=> CommentLikes)
  async removeCommentLike(@Args('commentLikeID', { type: () => String }) commentLikeID: string) {
    return await this.commentLikeService.remove(commentLikeID);
  }
}
