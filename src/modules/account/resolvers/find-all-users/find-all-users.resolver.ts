import {  UseGuards } from '@nestjs/common';
import { FindAllUserService } from '../../services/find-all-users/find-all-users.service';
import { Resolver, Query } from '@nestjs/graphql';
import { UserOutput } from '../../dtos/user';
import { GqlAuthGuard } from '../../guards/jwt-auth.guard';

@UseGuards(GqlAuthGuard)
@Resolver("users")
export class FindAlllUsersResolver {
  constructor(private readonly findAllService: FindAllUserService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [UserOutput])
  async findAllUsers() {
    return this.findAllService.findAll();
  }
}
