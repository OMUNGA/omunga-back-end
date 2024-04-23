import { Field, ObjectType } from "@nestjs/graphql";
import { Comment } from "@prisma/client";

@ObjectType()
export class Comments implements Comment {
  @Field()
  commentID: string;

  @Field()
  postID: string;

  @Field()
  userID: string;

  @Field()
  content: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
