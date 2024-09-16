import { Field, ObjectType } from '@nestjs/graphql';
import { Follow } from '@prisma/client';

@ObjectType()
export class Followers implements Follow {
  @Field()
  id: string;

  @Field()
  followerId: string;

  @Field()
  followingId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: Date;

}
