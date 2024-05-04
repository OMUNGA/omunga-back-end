import { Field, ObjectType } from "@nestjs/graphql";
import { Post } from "@prisma/client";
import { IsString } from "class-validator";

@ObjectType()
export class Posts implements Post {

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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;

}
