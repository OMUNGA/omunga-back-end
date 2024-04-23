import { Field, ObjectType } from '@nestjs/graphql';
import { Users } from 'src/modules/account/entities/user';
import { Comments } from 'src/modules/comment/entities/comment.entity';

@ObjectType()
export class CommentLikeResponse {
  @Field()
  commentlikeID: string;

  @Field()
  CommentID: string;

  @Field()
  user: Users

  @Field()
  comments: Comments

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
