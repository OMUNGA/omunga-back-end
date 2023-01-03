import {
  IsNotEmpty,
  IsEmail,
  IsNumber,
  IsDate,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateUserDTO {
  @IsUUID()
  @IsString()
  userID?: string;

  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  phone: number;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  bio: string;

  @IsNotEmpty()
  @IsString()
  photo: string;

  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;

  deletedAt: boolean;
}
