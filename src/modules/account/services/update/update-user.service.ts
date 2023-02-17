import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from '../../dtos/Update-user.dto ';
import { CreateUsersRepository } from '../../repositories/createUserRepository';

@Injectable()
export class UpdateUserService {
  constructor(private userRepository: CreateUsersRepository) {}

  async update(id: string, updateUserDTO: UpdateUserDTO) {
    const user = await this.userRepository.update(id, updateUserDTO);
    return user;
  }
}
