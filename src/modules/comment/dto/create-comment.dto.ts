import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @IsUUID()
  @IsNotEmpty()
  postID: string;

  @IsUUID()
  @IsNotEmpty()
  userID: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
