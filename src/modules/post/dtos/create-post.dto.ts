import { Field, InputType } from '@nestjs/graphql';
import {  IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @Field()
  title: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  content: string;

  @Field({nullable: true})
  published?: boolean;

  @Field({nullable: true})
  userID: string;
}
