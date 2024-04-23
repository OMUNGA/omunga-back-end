import {
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostLikeDto } from '../../dtos/create-post-like.dto';
import { CreatePostLikeService } from '../../services/create/post-like.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CurrentUser } from 'src/modules/account/decorator/current-user.decorator';
import { GqlAuthGuard } from 'src/modules/account/guards/jwt-auth.guard';
import { PostLikes } from '../../entities/post-like.entity';
import { Users } from 'src/modules/account/entities/user';

@UseGuards(GqlAuthGuard)
@Resolver('post-like')
export class CreatePostLikeResolver {
  constructor(private readonly postLikeService: CreatePostLikeService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => PostLikes)
  @UsePipes(ValidationPipe)
  CreatePostLike(
    @Args('createPostLikeDto') createPostLikeDto: CreatePostLikeDto,
    @CurrentUser() user: Users,
  ) {
    createPostLikeDto.userID = user.id;
    return this.postLikeService.create(createPostLikeDto);
  }
}
