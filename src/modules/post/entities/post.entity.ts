import { Field, ObjectType } from "@nestjs/graphql";
import { Post } from "@prisma/client";

@ObjectType()
export class Posts implements Post {
  @Field()
  postID: string;

  @Field()
  title: string;

  @Field()
  content: string;

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
