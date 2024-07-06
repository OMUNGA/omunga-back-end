import {
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateCommentReplyService } from '../../services/create/create-comment.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../../account/decorator/current-user.decorator';
import { GqlAuthGuard } from '../../../account/guards/jwt-auth.guard';
import { Users } from '../../../account/entities/user';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';
import { ReplyCommentDTO } from '../../dto/reply-comment.dto';
import { CommentReplyResponse } from '../../dto/reply-response';

@Resolver()
export class CreateCommentReplyResolver {
  constructor(private readonly commentReplyService: CreateCommentReplyService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => CommentReplyResponse)
  @UsePipes(ValidationPipe)
  CreateCommentReply(
    @Args('createReply') createReplyDTO: ReplyCommentDTO,
    @CurrentUser() user: Users,
  ) {
    createReplyDTO.userID = user.id;
    return this.commentReplyService.create(createReplyDTO);
  }
}
