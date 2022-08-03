export interface InputCreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  bio: string;
  photo: string;
  password: string;
}

export interface OutputCreateUserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  bio: string;
  photo: string;
}