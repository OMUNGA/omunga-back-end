import { Field, ObjectType } from "@nestjs/graphql";
import { CommentLike } from "@prisma/client";

@ObjectType()
export class CommentLikes  implements CommentLike {
  @Field()
  commentlikeID: string;

  @Field()
  CommentID: string;

  @Field()
  userID: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;

}
