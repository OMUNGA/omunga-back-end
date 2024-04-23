import {
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostService } from '../../services/create/create-post.service';
import { CreatePostDto } from '../../dtos/create-post.dto';

import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/modules/account/guards/jwt-auth.guard';
import { CurrentUser } from 'src/modules/account/decorator/current-user.decorator';
import { PostsOutput } from '../../dtos/posts.output';
import { Users } from 'src/modules/account/entities/user';

@UseGuards(GqlAuthGuard)
@Resolver('Post')
export class CreatePostResolver {
  constructor(private readonly createPostService: CreatePostService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => PostsOutput)
  @UsePipes(ValidationPipe)
  createPost(@Args('data') postInput: CreatePostDto, @CurrentUser() user: Users) {
    postInput.userID = user.id;
    return this.createPostService.create(postInput);
  }
}
