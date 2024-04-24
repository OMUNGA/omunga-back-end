import { UseGuards } from '@nestjs/common';
import { RemovePostService } from '../../services/remove/remove-post.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { Posts } from '../../entities/post.entity';

@UseGuards(GqlAuthGuard)
@Resolver('post')
export class RemovePostResolver {
  constructor(private postService: RemovePostService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Posts)
  async removePostt(@Args('id', { type: () => String }) id: string) {
    return await this.postService.remove(id);
  }
}
