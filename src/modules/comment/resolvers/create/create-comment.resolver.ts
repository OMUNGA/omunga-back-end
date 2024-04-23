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
import { CurrentUser } from 'src/modules/account/decorator/current-user.decorator';
import { GqlAuthGuard } from 'src/modules/account/guards/jwt-auth.guard';
import { Users } from 'src/modules/account/entities/user';

@Resolver('Comment')
export class CreateCommentResolver {
  constructor(private readonly commentService: CreateCommentService) {}

  @UseGuards(GqlAuthGuard)
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
