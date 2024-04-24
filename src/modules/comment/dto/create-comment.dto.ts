import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Users } from '../../../modules/account/entities/user';

@InputType()
export class CreateCommentDto {
  @IsUUID()
  @IsNotEmpty()
  @Field()
  postID: string;

  @Field({nullable: true})
  userID: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  content: string;
}


@ObjectType()
export class CommentResponse {
  @Field()
  commentID: string;
  
  @Field()
  postID: string;

  @Field()
  userID: string;

  @Field()
  content: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: boolean;

  @Field()
  user: Users;

}