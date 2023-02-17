import { User } from '@prisma/client';
import { CreateUserDTO } from '../dtos/Create-user.dto';
import { UpdateUserDTO } from '../dtos/Update-user.dto ';
import { ProfileDTO } from '../dtos/profile.dto';

export abstract class CreateUsersRepository {
  abstract create(userDto: CreateUserDTO): Promise<User>;
  abstract findByEmail(email: string): Promise<User>;
  abstract findById(id: string): Promise<User>;
  abstract remove({ id }: { id: string }): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract update(id: string, data: UpdateUserDTO): Promise<User>;
  abstract profile(userId: string): Promise<ProfileDTO>;
}
