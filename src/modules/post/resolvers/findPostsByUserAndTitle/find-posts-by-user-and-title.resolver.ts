import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { SearchPostService } from '../../services/search/search-post.service';
import { PostsOutput } from '../../dtos/posts.output';
import { Posts } from '../../entities/post.entity';
import { FindPostsByUserAndTitleService } from '../../services/findPostsByUserAndTitle/find-posts-by-user-and-title.service';

@Resolver()
export class FindPostsByUserAndTitleResolver {
  constructor(private postService: FindPostsByUserAndTitleService) {}

  @Mutation(() => PostsOutput)
  async findPostsByUserAndTitle(
    @Args('userName') userName: string,
    @Args('postTitle') postTitle: string
    
  ): Promise<Posts> {
    const posts = await this.postService.searchPost(userName,postTitle);
    return posts
  }
}
