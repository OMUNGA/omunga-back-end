import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CurrentUser } from '../../../account/decorator/current-user.decorator';
import { GqlAuthGuard } from '../../../account/guards/jwt-auth.guard';
import { Users } from '../../../account/entities/user';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';
import { UpdateCommentReplyService } from '../../services/update/update-commentReply.service';
import { UpdateReplyCommentDTO } from '../../dto/update-comment-reply.dto';
import { CommentReplyResponse } from '../../dto/reply-response';

@Resolver()
export class UpdateCommentReplyResolver {
  constructor(private readonly commentReplyService: UpdateCommentReplyService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => CommentReplyResponse)
  async updateCommentReply(
    @Args('data') updateCommentDto: UpdateReplyCommentDTO,
    @CurrentUser() user: Users,
  ) {
    updateCommentDto.userID = user.id;
    return await this.commentReplyService.update(updateCommentDto);
  }
}
