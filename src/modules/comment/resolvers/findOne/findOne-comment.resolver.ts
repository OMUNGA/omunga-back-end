import { FindOneCommentService } from '../../services/findOne/findOne-comment.service';
import { CommentResponse } from '../../dto/create-comment.dto';
import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';


@UseGuards(GqlAuthGuard)
@Resolver()
export class FindOneCommentResolver {
  constructor(private commentService: FindOneCommentService) {}

  @Query(() => CommentResponse)
  async FindOneComment(@Args('id') id: string) {
    return await this.commentService.findOne(id);
  }
}
