import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { ProfileOutput } from '../../dtos/profile.dto';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class ProfileService {
  constructor(private readonly userRepository: CreateUsersRepository) {}

  async profile(userId: string): Promise<ProfileOutput> {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new NotFoundException(messages.NotFoundUser);
    }
    const profile = await this.userRepository.profile(userId);
    return profile;
  }
}
