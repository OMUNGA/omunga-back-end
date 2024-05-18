import {
  Controller,
  Post,
  Body,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCommentLikeService } from '../../services/create/create-comment-like.service';
import { CreateCommentLikeDto } from '../../dto/create-comment-like.dto';
import { CommentLikes } from '../../entities/comment-like.entity';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CurrentUser } from '../../../../modules/account/decorator/current-user.decorator';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { Users } from '../../../../modules/account/entities/user';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';

@Resolver('Comment')
export class CreateCommentLikeResolver {
  constructor(private readonly commentLikeService: CreateCommentLikeService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => CommentLikes)
  @UsePipes(ValidationPipe)
  LikeComment(
    @Args('CommentLikeDto') createCommentLikeDto: CreateCommentLikeDto,
    @CurrentUser() user: Users,
  ) {
    createCommentLikeDto.userID = user.id;
    return this.commentLikeService.create(createCommentLikeDto);
  }
}
