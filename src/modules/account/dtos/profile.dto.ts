import { ObjectType, Field } from '@nestjs/graphql';
import { Users } from '../entities/user';
import { Followers } from '../../..//modules/followers/entities/followers';

@ObjectType()
export class ProfileOutput {
  @Field()
  user: Users;

  @Field(() => [Followers])
  followers: Followers[];

  @Field(() => [Followers]) 
  following: Followers[];
}
