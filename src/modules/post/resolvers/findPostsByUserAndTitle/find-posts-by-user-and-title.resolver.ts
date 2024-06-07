import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { SearchPostService } from '../../services/search/search-post.service';
import { PostsOutput } from '../../dtos/posts.output';
import { Posts } from '../../entities/post.entity';
import { FindPostsByUserAndTitleService } from '../../services/findPostsByUserAndTitle/find-posts-by-user-and-title.service';
import { UseGuards } from '@nestjs/common';
import { OptionalAuthGuard } from 'src/modules/account/guards/OptionalAuthGuard.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';
import { CurrentUser } from 'src/modules/account/decorator/current-user.decorator';
import { Users } from 'src/modules/account/entities/user';
import { FindPostInput } from '../../dtos/find-post-output';


@Resolver()
export class FindPostsByUserAndTitleResolver {
  constructor(private postService: FindPostsByUserAndTitleService) {}

  @UseGuards(OptionalAuthGuard)
  @Mutation(() => PostsOutput)
  async findPostsByUserAndTitle(
    @Args('data') data: FindPostInput,
    @CurrentUser() user: Users,
  ): Promise<Posts> {
    const isAuthenticated = !!user;
    const searchUsername = isAuthenticated ? (data.userName || user.username) : data.userName;
    data.userName  = searchUsername
    data.isAuthenticated = isAuthenticated
    const posts = await this.postService.searchPost(data);
    return posts;
  }
}
