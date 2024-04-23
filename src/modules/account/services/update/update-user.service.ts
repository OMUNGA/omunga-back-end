import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from '../../dtos/Update-user.dto ';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { messages } from '../../../../../shared/errorsMessages';

@Injectable()
export class UpdateUserService {
  constructor(private userRepository: CreateUsersRepository) {}

  async update(updateUserDTO: UpdateUserDTO) {
    try {
      const user = await this.userRepository.update(updateUserDTO);
      return user;
    } catch (error) {
      throw new Error(messages.InternalServerError);
    }
  }
}
