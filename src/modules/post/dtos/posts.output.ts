import { Field, ObjectType } from '@nestjs/graphql';
import { Users } from '../../../modules/account/entities/user';
import { Comments } from '../../../modules/comment/entities/comment.entity';
import { PostLikes } from '../../..//modules/post-like/entities/post-like.entity';

@ObjectType()
export class PostsOutput {
  @Field()
  postID: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  cover: string;

  @Field(() => [String])
  tags: string[];

  @Field({ nullable: true })
  published: boolean;

  @Field(() => Users, { nullable: true })
  user?: Users;

  @Field(() => [Comments], { nullable: true })
  comment?: Comments[];

  @Field(() => [PostLikes], { nullable: true })
  postLike?: PostLikes[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
