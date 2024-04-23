import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
export class FollowerDTO {
  @Field({ nullable: true })
  userID: string;

  @IsUUID()
  @IsString()
  @IsString()
  @IsNotEmpty()
  @Field()
  userIdToFollow: string;
}
