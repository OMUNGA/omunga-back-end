import { Injectable } from '@nestjs/common';
import { CreateUsersRepository } from '../../repositories/createUserRepository';

@Injectable()
export class FindAllUserService {
  constructor(private userRepository: CreateUsersRepository) {}

  async findAll() {
    try {
      return this.userRepository.findAll();
    } catch (error) {
      throw error;
    }
  }
}
