import { FindAllCommentLikeService } from '../../services/findAll/findAll-comment-like.service';
import { CommentLikes } from '../../entities/comment-like.entity';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { messages } from 'shared/errorsMessages';

@Resolver('comment-likes')
export class FindAllCommentLikeResolver {
  constructor(private readonly commentLikeService: FindAllCommentLikeService) {}

  @Query(() => [CommentLikes])
  async findAllCommentLikes(
    @Args("commentID") commentID: string
  ) {
    return await this.commentLikeService.findAllCommentlikes(commentID);
  }
}
