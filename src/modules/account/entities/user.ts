import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import {  User, UserRole } from '@prisma/client';


@ObjectType()
export class Users implements User {
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

  @Field()
  password: string;

  @Field({ nullable: true })
  bio: string;

  @Field({nullable: true})
  photo: string;

  @Field({nullable: true})
  cover: string;

  @Field({nullable: true})
  role: UserRole;

  @Field({nullable: true})
  address: string;

  @Field(() => [String], { nullable: true })
  socialMedia: string[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;
}


export enum UserRoles {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
  VERIFIED = 'VERIFIED',
  PREMIUM = 'PREMIUM',
  MEMBER = 'MEMBER',
}