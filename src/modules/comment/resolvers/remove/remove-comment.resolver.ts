import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserOutput } from '../../../../modules/account/dtos/user';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { RemoveCommentService } from '../../services/remove/remove-comment.service';
import { Comments } from '../../entities/comment.entity';

@UseGuards(GqlAuthGuard)
@Resolver('comment')
export class RemoveCommentResolver {
  constructor(private commentService: RemoveCommentService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Comments)
  async removeComment(@Args('id', { type: () => String }) id: string) {
    return await this.commentService.remove(id);
  }
}
