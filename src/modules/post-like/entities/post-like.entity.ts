import { Field, ObjectType } from '@nestjs/graphql';
import { PostLike } from '@prisma/client';

@ObjectType()
export class PostLikes implements PostLike {
  @Field()
  postlikeID: string;

  @Field()
  postID: string;

  @Field({nullable: true})
  userID: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
