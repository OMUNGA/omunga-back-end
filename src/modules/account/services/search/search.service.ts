import { Injectable } from '@nestjs/common';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { messages } from '../../../../../shared/errorsMessages';

@Injectable()
export class SearchUserService {
  constructor(private userRepository: CreateUsersRepository) {}

  async search(userName: string) {
    try {
      return this.userRepository.search(userName)
    } catch (error) {
      throw new Error(messages.InternalServerError);
    }
  }
}
