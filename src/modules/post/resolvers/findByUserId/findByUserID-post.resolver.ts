import { FindAllPostService } from '../../services/findAll/findAll-post.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostsOutput } from '../../dtos/posts.output';
import { PaginationInput } from '../../dtos/pagination-input';
import { PaginatedPosts } from '../../dtos/pagination-post';
import { FindbyUserIDPostService } from '../../services/findByUserID/findByUserId-post.service';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/modules/account/decorator/current-user.decorator';
import { Users } from 'src/modules/account/entities/user';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';
import { GqlAuthGuard } from 'src/modules/account/guards/jwt-auth.guard';

@Resolver('posts')
export class FindByUserIDPostsResolver {
  constructor(private readonly postService: FindbyUserIDPostService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Query(() => PaginatedPosts)
  async FindPostByUserID(
    @Args('paginationInput') paginationInput: PaginationInput,
    @Args('userID') userID: string,
    @CurrentUser() user: Users,

  ) {
  
    return this.postService.execute(userID,paginationInput);
  }
}
