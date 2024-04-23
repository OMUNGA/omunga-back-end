import { Resolver, Args, Query } from '@nestjs/graphql';
import { FindOnePostService } from '../../services/findOne/findOne-post.service';
import { PostsOutput } from '../../dtos/posts.output';

@Resolver()
export class FindOnePostResolver {
  constructor(private postService: FindOnePostService) {}

  @Query(() => PostsOutput)
  async FindOnePost(@Args('id') id: string) {
    return await this.postService.findOne(id);
  }
}
