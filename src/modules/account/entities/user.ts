import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from '@prisma/client';


@ObjectType()
export class Users implements User {
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
  password: string;

  @Field()
  bio: string;

  @Field({nullable: true})
  photo: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}
