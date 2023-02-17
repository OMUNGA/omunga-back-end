import { IsString, IsUUID } from 'class-validator';

export class AddFollowerDTO {
  @IsUUID()
  @IsString()
  @IsString()
  userIdToFollow: string;
  // userId: string;
}
