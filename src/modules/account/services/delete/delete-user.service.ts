import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class DeleteUserService {
  constructor(private readonly userRepository: CreateUsersRepository) {}

  async remove(id: string) {
    try {
      const user = await this.userRepository.findById(id);
      if (!user) {
        throw new NotFoundException('Ups, usuário não encontrado.');
      }
      return this.userRepository.remove({ id });
    } catch (error) {
      throw new Error(messages.InternalServerError);
    }
  }
}
