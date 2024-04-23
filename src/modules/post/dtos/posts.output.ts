import { Field, ObjectType } from '@nestjs/graphql';
import { Users } from 'src/modules/account/entities/user';
import { Comments } from 'src/modules/comment/entities/comment.entity';
import { PostLikes } from 'src/modules/post-like/entities/post-like.entity';

@ObjectType()
export class PostsOutput {
  @Field()
  postID: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field({nullable: true})
  published: boolean;


  @Field(() => Users, {nullable: true})
  user: Users;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;

  @Field(() => [PostLikes], { nullable: true })
  postlikes: PostLikes[];

  @Field(() => [Comments], { nullable: true })
  comments: Comments[];
}
