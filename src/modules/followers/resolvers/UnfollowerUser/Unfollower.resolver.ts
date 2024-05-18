import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserOutput } from '../../../../modules/account/dtos/user';
import { FollowerDTO } from '../../dtos/add-followers.dto';
import { UnFollowerService } from '../../services/unFollower/Unfollower.service';
import { CurrentUser } from '../../../../modules/account/decorator/current-user.decorator';
import { Followers } from '../../entities/followers';
import { Users } from '../../../../modules/account/entities/user';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';

@Resolver('follower')
export class UnfollowUserResolver {
  constructor(private readonly unFollowerService: UnFollowerService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => String, { nullable: true })
  async unfollowUser(
    @Args('data') data: FollowerDTO,
    @CurrentUser() user: Users,
  ) {
    data.userID = user.id;
    await this.unFollowerService.unFollower(data);
  }
}
