import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindAllReplyCommentService } from '../../services/listAll/findAll-commentReply.service';
import { CommentReplyResponse } from '../../dto/reply-response';


@Resolver("reply")
export class FindAllCommentReplyResolver {
  constructor(private readonly commentReplyService: FindAllReplyCommentService) {}

  @Query(() => [CommentReplyResponse])
  async findAllCommentReply(
    @Args('commentID') commentID: string,
  ) {
    return this.commentReplyService.findAll(commentID);
  }
}


