import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';


@InputType()
export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @Field()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  password: string;

}
