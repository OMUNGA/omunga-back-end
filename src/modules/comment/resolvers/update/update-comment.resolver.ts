import { UseGuards } from '@nestjs/common';
import { UpdateCommentService } from '../../services/update/update-comment.service';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CurrentUser } from '../../../../modules/account/decorator/current-user.decorator';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { CommentResponse } from '../../dto/create-comment.dto';
import { Users } from '../../../../modules/account/entities/user';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';

@Resolver('comment')
export class UpdateCommentResolver {
  constructor(private readonly commentService: UpdateCommentService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => CommentResponse)
  async updateComment(
    @Args('data') updateCommentDto: UpdateCommentDto,
    @CurrentUser() user: Users,
  ) {
    updateCommentDto.userID = user.id;
    return await this.commentService.update(updateCommentDto);
  }
}
