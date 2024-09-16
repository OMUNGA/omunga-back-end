import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
export class FollowerDTO {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  @Field()
  userToFollowId: string;
}
