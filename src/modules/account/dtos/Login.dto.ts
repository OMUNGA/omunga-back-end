import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';
import { Users } from '../entities/user';

@InputType()
export class LoginDTO {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  password: string;
}

@ObjectType()
export class LoginOutput {
  @Field(() => String, {})
  token: string;

  @Field()
  expiresIn: Date;

  @Field(() => Users, {})
  user: Users;
}
