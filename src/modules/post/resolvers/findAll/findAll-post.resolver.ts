import { FindAllPostService } from '../../services/findAll/findAll-post.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostsOutput } from '../../dtos/posts.output';
import { PaginationInput } from '../../dtos/pagination-input';
import { PaginatedPosts } from '../../dtos/pagination-post';

@Resolver('posts')
export class FindAllPostsResolver {
  constructor(private readonly postService: FindAllPostService) {}

  @Query(() => PaginatedPosts)
  async FindAllPosts(
    @Args('paginationInput') paginationInput: PaginationInput,
  ) {
    return this.postService.findAll(paginationInput);
  }
}
