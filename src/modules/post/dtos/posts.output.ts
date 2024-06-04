import { Field, ObjectType } from '@nestjs/graphql';
import { Users } from '../../../modules/account/entities/user';
import { Comments } from '../../../modules/comment/entities/comment.entity';
import { PostLikes } from '../../..//modules/post-like/entities/post-like.entity';

@ObjectType()
export class PostsOutput {

  @Field({ nullable: true })
  postID: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  content: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  cover: string;

  @Field(() => [String])
  tags: string[];

  @Field({ nullable: true })
  published: boolean;

  @Field(() => Users, { nullable: true })
  user?: Users;

  @Field({nullable: true})
  slug: string;

  @Field(() => [Comments], { nullable: true })
  comment?: Comments[];

  @Field(() => [PostLikes], { nullable: true })
  postLike?: PostLikes[];

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: boolean;
}
