import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Users } from '../../account/entities/user';

@InputType()
export class ReplyCommentDTO {
  @IsUUID()
  @IsNotEmpty()
  @Field()
  commentID: string;

  @Field({nullable: true})
  userID: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  content: string;
}

