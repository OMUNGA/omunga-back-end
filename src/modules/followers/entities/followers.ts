import { Field, ObjectType } from '@nestjs/graphql';
import { Follower } from '@prisma/client';

@ObjectType()
export class Followers implements Follower {
  @Field()
  id: string;

  @Field()
  userTofollowID: string;

  @Field()
  userID: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;

}
