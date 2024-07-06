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
  @Field({nullable: true})
  commentID: string;
  
  @Field({nullable: true})
  postID: string;

  @Field({nullable: true})
  userID: string;

  @Field({nullable: true})
  content: string;

  @Field({nullable: true})
  createdAt: Date;

  @Field({nullable: true})
  updatedAt: Date;

  @Field({nullable: true})
  deletedAt: Date;

  @Field({nullable: true})
  user: Users;

}