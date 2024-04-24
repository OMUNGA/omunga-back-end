import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindOneService } from '../../services/find-one/find-one-user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../guards/jwt-auth.guard';
import { UserOutput } from '../../dtos/user';

@UseGuards(GqlAuthGuard)
@Resolver()
export class FindOneUserResolver {
  constructor(private findOneUserService: FindOneService) {}

  @Query(() => UserOutput)
  async FindOneUser(@Args('id') id: string) {
    return await this.findOneUserService.findOne(id);
  }
}


