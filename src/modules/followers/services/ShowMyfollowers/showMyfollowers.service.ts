import { Injectable, NotFoundException } from '@nestjs/common';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';

@Injectable()
export class ShowMyFollowersService {
  constructor(
    private followerRepo: FollowersRepository,
    private userRepo: CreateUsersRepository,
  ) {}

  async ShowMyFollower(userId: string): Promise<number> {
    try {
      const user = await this.userRepo.findById(userId);

      if (!user) {
        throw new NotFoundException('Ups, usuário não encontrado!');
      }
      const follower = await this.followerRepo.showMyFollower(userId);
      return follower;
    } catch (error) {
      throw error;
    }
  }
}
