import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Posts } from '../../entities/post.entity';
import { SearchPostService } from '../../services/search/search-post.service';

@Resolver()
export class SearchPostResolver {
  constructor(private postService: SearchPostService) {}

  @Mutation(() => Posts)
  async searchPost(@Args('searchPost') searchPost: string) {
    return await this.postService.searchPost(searchPost);
  }
}
