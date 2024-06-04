import { Args, Query, Resolver } from '@nestjs/graphql';
import { PaginationInput } from '../../dtos/pagination-input';
import { PaginatedPosts } from '../../dtos/pagination-post';

import { FindbyUserNamePostService } from '../../services/findByUserID/findByUserName-post.service';

@Resolver('posts')
export class FindByUserNamePostsResolver {
  constructor(private readonly postService: FindbyUserNamePostService) {}

  @Query(() => PaginatedPosts)
  async FindPostByUserID(
    @Args('paginationInput') paginationInput: PaginationInput,
    @Args('userName') userName: string,

  ) {
  
    return this.postService.execute(userName,paginationInput);
  }
}
