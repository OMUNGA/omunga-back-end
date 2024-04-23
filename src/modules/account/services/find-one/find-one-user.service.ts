import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class FindOneService {
  constructor(private userRepository: CreateUsersRepository) {}

  async findOne(id: string) {
    try {
      const user = await this.userRepository.findById(id);

      if (!user) {
        throw new NotFoundException('Ups, usuário não encontrado!');
      }
      return this.userRepository.findById(id);
    } catch (error) {
      throw new Error(messages.InternalServerError);
    }
  }
}
