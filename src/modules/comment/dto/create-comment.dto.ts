import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @IsUUID()
  @IsNotEmpty()
  postID: string;

  userID: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
