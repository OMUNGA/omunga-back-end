import { UpdateUserService } from '../../services/update/update-user.service';
import { UpdateUserDTO } from '../../dtos/Update-user.dto ';
import { Users } from '../../entities/user';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CurrentUser } from '../../decorator/current-user.decorator';
import { GqlAuthGuard } from '../../guards/jwt-auth.guard';

@Resolver('user')
export class UpdateUserResolver {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Users)
  async updateUser(
    @Args('data') data: UpdateUserDTO,
    @CurrentUser() user: Users,
  ) {

    data.userID = user.id;
    return await this.updateUserService.update(data);
  }
}
