import { CreateUserDTO } from '../dtos/Create-user.dto';
import { UpdateUserDTO } from '../dtos/Update-user.dto ';
import { ProfileOutput } from '../dtos/profile.dto';
import { Users } from '../entities/user';

export abstract class CreateUsersRepository {
  abstract create(userDto: CreateUserDTO): Promise<Users>;
  abstract findByEmail(email: string): Promise<Users>;
  abstract findById(id: string): Promise<Users>;
  abstract remove({ id }: { id: string }): Promise<Users>;
  abstract findAll(): Promise<Users[]>;
  abstract update(data: UpdateUserDTO): Promise<Users>;
  abstract profile(userId: string): Promise<ProfileOutput>;
}
