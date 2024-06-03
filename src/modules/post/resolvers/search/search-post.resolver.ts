import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { SearchPostService } from '../../services/search/search-post.service';
import { PostsOutput } from '../../dtos/posts.output';
import { Posts } from '../../entities/post.entity';

@Resolver()
export class SearchPostResolver {
  constructor(private postService: SearchPostService) {}

  @Mutation(() => [PostsOutput])
  async searchPost(@Args('searchInput') searchPost: string): Promise<Posts[]> {
    const posts = await this.postService.searchPost(searchPost);
    return posts
  }
}
