import { Injectable, NotFoundException } from '@nestjs/common';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';

@Injectable()
export class UnFollowerService {
  constructor(
    private followerRepo: FollowersRepository,
    private userRepo: CreateUsersRepository,
  ) {}

  async unFollower(userId: string, userTofollowID) {
    try {
      const user = await this.userRepo.findById(userTofollowID);
      if (!user) {
        throw new NotFoundException('Ups, usuário não encontrado!');
      }
      return this.followerRepo.unfollowUser(userId, userTofollowID);
    } catch (error) {
      throw error;
    }
  }
}
