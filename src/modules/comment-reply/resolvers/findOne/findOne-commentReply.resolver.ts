import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Query } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../../account/guards/jwt-auth.guard';
import { FindOneCommentReplyService } from '../../services/findOne/findOne-commentReply.service';
import { CommentReplyResponse } from '../../dto/reply-response';


@UseGuards(GqlAuthGuard)
@Resolver()
export class FindOneCommentResolver {
  constructor(private replyService: FindOneCommentReplyService) {}

  @Query(() => CommentReplyResponse)
  async FindOneCommentReply(@Args('id') id: string) {
    return await this.replyService.findOne(id);
  }
}
