import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { UserRole } from '@prisma/client';

@ObjectType()
export class UserOutput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  username: string;

  @Field({})
  email: string;

  @Field()
  phone: string;

  @Field()
  bio: string;

  @Field({ nullable: true })
  photo: string;

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
