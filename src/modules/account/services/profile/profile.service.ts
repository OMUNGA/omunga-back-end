import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { ProfileDTO } from '../../dtos/profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly userRepository: CreateUsersRepository) {}

  async profile(userId: string): Promise<ProfileDTO> {
    try {
      const user = await this.userRepository.findById(userId);
      if (!user) {
        throw new UnauthorizedException('Ups, Você precisa estar logado.');
      }
      const profile = await this.userRepository.profile(userId);
      return profile;
    } catch (error) {
      throw error;
    }
  }
}
