import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Followers } from '../../entities/followers';
import { CurrentUser } from '../../../../modules/account/decorator/current-user.decorator';
import { GqlAuthGuard } from '../../../../modules/account/guards/jwt-auth.guard';
import { Users } from '../../../../modules/account/entities/user';
import { FollowerDTO } from '../../dtos/add-followers.dto';
import { AddFollowerService } from '../../services/Add-follower/Add-follower.service';
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/decorators/rules.decorators';
import { GqlRolesGuard } from 'src/modules/account/guards/GqlRolesGuard.guard';

@Resolver('follower')
export class AddFollowerResolver {
  constructor(private readonly addFollowerService: AddFollowerService) {}

  @UseGuards(GqlAuthGuard, GqlRolesGuard)
  @Roles(UserRole.MEMBER)
  @Mutation(() => Followers)
  @UsePipes(ValidationPipe)
  async followUser(@Args('data') data: FollowerDTO, @CurrentUser() user: Users): Promise<Followers> {
    data.userID = user.id;
    return await this.addFollowerService.followUser(data);
  }
}
