import { FindAllPostService } from '../../services/findAll/findAll-post.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostsOutput } from '../../dtos/posts.output';
import { PaginationInput } from '../../dtos/pagination-input';
import { PaginatedPosts } from '../../dtos/pagination-post';
import { findUnpublishedPostsService } from '../../services/findUnpublishedPosts/find-unpublished-posts.service';
import { CurrentUser } from 'src/modules/account/decorator/current-user.decorator';
import { UseGuards } from '@nestjs/common';
import { Users } from 'src/modules/account/entities/user';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';
import { GqlAuthGuard } from 'src/modules/account/guards/jwt-auth.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';

@Resolver('posts')
export class findUnpublishedPostsResolver {
  constructor(private readonly postService: findUnpublishedPostsService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Query(() => PaginatedPosts)
  async FindAllUnpublishedPosts(
    @Args('paginationInput') paginationInput: PaginationInput,
    @CurrentUser() user: Users,
  ) {
    const userID = user.id
    return this.postService.findAllUnpublishedPosts(userID,paginationInput);
  }
}
