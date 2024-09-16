import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { FollowerDTO } from '../../dtos/add-followers.dto';
import { messages } from '../../../../../shared/errorsMessages';

@Injectable()
export class UnFollowerService {
  constructor(
    private followerRepo: FollowersRepository,
    private userRepo: CreateUsersRepository,
  ) {}

  async unFollower( currentUser: string, userToUnfollow: string,) {
    try {
      const followId = await this.followerRepo.findOne(currentUser, userToUnfollow)

      if (!followId) {
        throw new UnauthorizedException(messages.Unauthenticated);
      }
      return this.followerRepo.unfollowUser(followId.id);
    } catch (error) {
      throw error;
    }
  }
}
