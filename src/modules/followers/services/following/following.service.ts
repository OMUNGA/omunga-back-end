import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { messages } from '../../../../../shared/errorsMessages';

@Injectable()
export class FollowingService {
  constructor(
    private followerRepo: FollowersRepository,
    private userRepo: CreateUsersRepository,
   ) {}

  async getFollowing(username: string) {
    try {
      const user = await this.userRepo.findByUsername(username);
      if (!user) {
        throw new UnauthorizedException(messages.Unauthenticated);
      }
      const following = await this.followerRepo.getAllFollowing(username);
      return following;
    } catch (error) {
      throw error;
    }
  }
}
