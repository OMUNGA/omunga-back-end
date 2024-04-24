import { FindAllPostService } from '../../services/findAll/findAll-post.service';
import { Query, Resolver } from '@nestjs/graphql';
import { PostsOutput } from '../../dtos/posts.output';

@Resolver('posts')
export class FindAllPostsResolver {
  constructor(private readonly postService: FindAllPostService) {}

  @Query(() => [PostsOutput])
  async FindAllPosts() {
    return this.postService.findAll();
  }
}
