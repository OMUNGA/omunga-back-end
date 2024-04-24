import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCommentLikeDto {
  @IsNotEmpty()
  @Field()
  CommentID: string;

  @Field({nullable: true})
  userID: string;
}
