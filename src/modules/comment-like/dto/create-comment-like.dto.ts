import { IsNotEmpty } from 'class-validator';

export class CreateCommentLikeDto {
  @IsNotEmpty()
  CommentID: string;

  userID: string;
}
