import { IsNotEmpty, IsString } from 'class-validator';

export class AddFollowersDTO {
  @IsNotEmpty()
  @IsString()
  userfollowID: string;

  @IsNotEmpty()
  @IsString()
  userID: string;

  followersID: string;
}
