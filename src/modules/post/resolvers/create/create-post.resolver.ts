import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePostService } from '../../services/create/create-post.service';
import { CreatePostDto } from '../../dtos/create-post.dto';

import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { CurrentUser } from '../../../../modules/account/decorator/current-user.decorator';
import { PostsOutput } from '../../dtos/posts.output';
import { Users } from '../../../../modules/account/entities/user';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';

@Resolver('Post')
export class CreatePostResolver {
  constructor(private readonly createPostService: CreatePostService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => PostsOutput)
  @UsePipes(ValidationPipe)
  createPost(
    @Args('data') postInput: CreatePostDto,
    @CurrentUser() user: Users,
  ) {
    postInput.userID = user.id;
    return this.createPostService.create(postInput);
  }
}
