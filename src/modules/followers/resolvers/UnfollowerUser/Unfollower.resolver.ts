import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserOutput } from 'src/modules/account/dtos/user';
import { FollowerDTO } from '../../dtos/add-followers.dto';
import { UnFollowerService } from '../../services/unFollower/Unfollower.service';
import { CurrentUser } from 'src/modules/account/decorator/current-user.decorator';
import { Followers } from '../../entities/followers';
import { Users } from 'src/modules/account/entities/user';
import { GqlAuthGuard } from 'src/modules/account/guards/jwt-auth.guard';

@Resolver('follower')
export class UnfollowUserResolver {
  constructor(private readonly unFollowerService: UnFollowerService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => String, { nullable: true })
  async unfollowUser(
    @Args('data') data: FollowerDTO,
    @CurrentUser() user: Users,
  ) {
    data.userID = user.id;
    await this.unFollowerService.unFollower(data);
  }
}
