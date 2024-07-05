import { Field, ObjectType } from '@nestjs/graphql';
import { Users } from 'src/modules/account/entities/user';

@ObjectType()
export class CommentReplyResponse {
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

  @Field()
  user: Users;
}
