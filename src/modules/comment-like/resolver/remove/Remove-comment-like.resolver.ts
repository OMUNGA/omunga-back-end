import { Controller, Param, Delete, UseGuards } from '@nestjs/common';
import { RemoveCommentLikeService } from '../../services/remove/Remove-comment-like.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { CommentLikes } from '../../entities/comment-like.entity';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';


@Resolver('comment-like')
export class RemoveCommentLikeResolver {
  constructor(private commentLikeService: RemoveCommentLikeService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(()=> CommentLikes)
  async removeCommentLike(@Args('commentLikeID', { type: () => String }) commentLikeID: string) {
    return await this.commentLikeService.remove(commentLikeID);
  }
}
