import { IsNotEmpty } from 'class-validator';

export class CreateCommentLikeDto {
  @IsNotEmpty()
  CommentID: string;

  @IsNotEmpty()
  userID: string;
}
