import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import {  User, UserRole } from '@prisma/client';


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

  @Field({nullable: true})
  role: UserRole;

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