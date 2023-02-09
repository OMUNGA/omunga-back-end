import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AddFollowerDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  userID: string;

  @IsString()
  @IsString()
  userfollowID: string;
}
