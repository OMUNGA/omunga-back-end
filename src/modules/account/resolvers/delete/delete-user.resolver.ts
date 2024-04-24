import { UseGuards } from '@nestjs/common';
import { DeleteUserService } from '../../services/delete/delete-user.service';
import { GqlAuthGuard } from '../../guards/jwt-auth.guard';
import { UserOutput } from '../../dtos/user';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@UseGuards(GqlAuthGuard)
@Resolver('users')
export class DeleteUserResolver {
  constructor(private deleteUserService: DeleteUserService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => UserOutput)
  async removeUser(@Args('id', { type: () => String }) id: string) {
    return await this.deleteUserService.remove(id);
  }
}
