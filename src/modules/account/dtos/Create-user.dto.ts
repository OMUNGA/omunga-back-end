import { IsNotEmpty, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDTO {
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
}
