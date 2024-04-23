import { UseGuards } from '@nestjs/common';
import { UpdateCommentService } from '../../services/update/update-comment.service';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CurrentUser } from 'src/modules/account/decorator/current-user.decorator';
import { GqlAuthGuard } from 'src/modules/account/guards/jwt-auth.guard';
import { CommentResponse } from '../../dto/create-comment.dto';
import { Users } from 'src/modules/account/entities/user';

@Resolver('comment')
export class UpdateCommentResolver {
  constructor(private readonly commentService: UpdateCommentService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => CommentResponse)
  async updateComment(
    @Args('data') updateCommentDto: UpdateCommentDto,
    @CurrentUser() user: Users,
  ) {
    updateCommentDto.userID = user.id;
    return await this.commentService.update(updateCommentDto);
  }
}
