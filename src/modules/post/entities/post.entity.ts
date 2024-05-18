import { Field, ObjectType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { Users } from "src/modules/account/entities/user";
import { Comments } from "src/modules/comment/entities/comment.entity";
import { PostLikes } from "src/modules/post-like/entities/post-like.entity";

@ObjectType()
export class Posts  {

  @Field()
  postID: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  cover: string;

  @IsString({ each: true })
  @Field(() => [String])
  tags: string[];

  @Field({nullable: true})
  published: boolean;

  @Field({nullable: true})
  userID: string;


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
