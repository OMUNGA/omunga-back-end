import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsersRepository } from 'src/modules/account/repositories/createUserRepository';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { messages } from '../../../../../shared/errorsMessages';

@Injectable()
export class FollowingService {
  constructor(
    private followerRepo: FollowersRepository,
    private userRepo: CreateUsersRepository,
   ) {}

  async getFollowing(userID: string) {
    try {
      const user = await this.userRepo.findById(userID);
      if (!user) {
        throw new UnauthorizedException(messages.Unauthenticated);
      }
      const following = await this.followerRepo.getFollowing(userID);
      return following;
    } catch (error) {
      throw error;
    }
  }
}
