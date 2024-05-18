import {
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  CommentResponse,
  CreateCommentDto,
} from '../../dto/create-comment.dto';
import { CreateCommentService } from '../../services/create/create-comment.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../../../modules/account/decorator/current-user.decorator';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { Users } from '../../../../modules/account/entities/user';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';

@Resolver('Comment')
export class CreateCommentResolver {
  constructor(private readonly commentService: CreateCommentService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => CommentResponse)
  @UsePipes(ValidationPipe)
  CreateComment(
    @Args('createCommentDto') createCommentDto: CreateCommentDto,
    @CurrentUser() user: Users,
  ) {
    createCommentDto.userID = user.id;
    return this.commentService.create(createCommentDto);
  }
}
