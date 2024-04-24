import {
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from '../../dtos/Create-user.dto';
import { CreateUserService } from '../../services/create/create-user.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserOutput } from '../../dtos/user';

@Resolver('signup')
export class CreateUserResolver {
  constructor(private readonly createUserService: CreateUserService) {}

  @Mutation(() => UserOutput)
  @UsePipes(ValidationPipe)
  signup( @Args('data') createUserInput: CreateUserDTO ) {
    return this.createUserService.create(createUserInput);
  }
}
