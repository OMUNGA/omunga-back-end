import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Post, UserRole } from '@prisma/client';

@ObjectType()
export class UserOutput {
  @Field()
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  phone: string;

  @Field({ nullable: true })
  bio: string;

  @Field({ nullable: true })
  photo: string;

  @Field({ nullable: true })
  cover: string;

  @Field()
  followers: number;

  @Field({nullable: true})
  role: UserRole;

  @Field()
  followings: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
