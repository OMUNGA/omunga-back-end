import { IsNotEmpty } from 'class-validator';

export class UpdateCommentLikeDto {
  @IsNotEmpty()
  CommentID: string;

  @IsNotEmpty()
  userID: string;
}
