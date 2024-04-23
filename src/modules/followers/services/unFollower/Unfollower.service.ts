import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { FollowerDTO } from '../../dtos/add-followers.dto';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class UnFollowerService {
  constructor(
    private followerRepo: FollowersRepository,
    private userRepo: CreateUsersRepository,
  ) {}

  async unFollower(data: FollowerDTO) {
    try {
      const user = await this.userRepo.findById(data.userID);
      if (!user) {
        throw new UnauthorizedException(messages.Unauthenticated);
      }
      return this.followerRepo.unfollowUser(data);
    } catch (error) {
      throw error;
    }
  }
}
