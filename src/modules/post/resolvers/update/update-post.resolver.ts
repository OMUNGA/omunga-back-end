import {UseGuards, UsePipes, ValidationPipe,} from '@nestjs/common';
import { UpdatePostService } from '../../services/update/update-post.service';
import { UpdatePostDto } from '../../dtos/update-post.dto';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../../..//modules/account/guards/jwt-auth.guard';
import { Posts } from '../../entities/post.entity';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';

@Resolver('post')
export class UpdatePostResolver {
  constructor(private readonly postService: UpdatePostService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => Posts)
  async updatePost(
    @Args('id', { type: () => String }) id: string,
    @Args('data') updatePostDto: UpdatePostDto,
  ) {

    return await this.postService.update(id, updatePostDto);
  }
}
