import { UseGuards } from '@nestjs/common';
import { RemovePostService } from '../../services/remove/remove-post.service';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { Posts } from '../../entities/post.entity';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';

@UseGuards(GqlAuthGuard)
@Resolver('post')
export class RemovePostResolver {
  constructor(private postService: RemovePostService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => Posts)
  async removePostt(@Args('id', { type: () => String }) id: string) {
    return await this.postService.remove(id);
  }
}
