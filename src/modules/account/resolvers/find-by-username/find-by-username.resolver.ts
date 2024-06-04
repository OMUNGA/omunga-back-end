import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindOneService } from '../../services/find-one/find-one-user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserOutput } from '../../dtos/user';

@Resolver()
export class FindOneUserResolver {
  constructor(private findOneUserService: FindOneService) {}

  @Query(() => UserOutput)
  async FindOneUser(@Args('userName') userName: string) {
    return await this.findOneUserService.findOne(userName);
  }
}


