import { FindAllCommentService } from '../../services/listAll/findAll-comment.service';
import { CommentResponse } from '../../dto/create-comment.dto';
import { Args, Query, Resolver } from '@nestjs/graphql';


@Resolver("comments")
export class FindAllCommentResolver {
  constructor(private readonly commentService: FindAllCommentService) {}

  @Query(() => [CommentResponse])
  async findAllComments(
    @Args('postID') postID: string,
  ) {
    return this.commentService.findAll(postID);
  }
}


