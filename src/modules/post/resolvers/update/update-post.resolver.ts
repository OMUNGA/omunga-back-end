import {UseGuards, UsePipes, ValidationPipe,} from '@nestjs/common';
import { UpdatePostService } from '../../services/update/update-post.service';
import { UpdatePostDto } from '../../dtos/update-post.dto';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CurrentUser } from 'src/modules/account/decorator/current-user.decorator';
import { GqlAuthGuard } from 'src/modules/account/guards/jwt-auth.guard';
import { Posts } from '../../entities/post.entity';

@Resolver('post')
export class UpdatePostResolver {
  constructor(private readonly postService: UpdatePostService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Posts)
  async updatePost(
    @Args('id', { type: () => String }) id: string,
    @Args('data') updatePostDto: UpdatePostDto,
  ) {

    return await this.postService.update(id, updatePostDto);
  }
}
