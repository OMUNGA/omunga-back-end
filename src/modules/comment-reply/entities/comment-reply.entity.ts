import { CommentReply } from '@prisma/client';
import { Field, ObjectType  } from '@nestjs/graphql';

@ObjectType()
export class commentReply implements CommentReply {
  @Field()
  id: string;

  @Field()
  commentID: string;

  @Field()
  userID: string;

  @Field()
  content: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({nullable: true})
  deletedAt: Date;
}
