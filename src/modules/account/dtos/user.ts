import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

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
  phone: number;

  @Field()
  bio: string;

  @Field({ nullable: true })
  photo: string;

  @Field()
  followers: number;

  @Field()
  followings: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
