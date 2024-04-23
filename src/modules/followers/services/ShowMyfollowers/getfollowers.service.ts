import { Injectable, NotFoundException } from '@nestjs/common';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { messages } from 'shared/errorsMessages';
import { Followers } from '../../entities/followers';

@Injectable()
export class GetFollowersService {
  constructor(
    private followerRepo: FollowersRepository,
    private userRepo: CreateUsersRepository,
  ) {}

  async getFollowers(userId: string): Promise<Followers[]> {
      const user = await this.userRepo.findById(userId);

      if (!user) {
        throw new NotFoundException(messages.NotFoundUser);
      }
      const follower = await this.followerRepo.getFollowers(userId);
      return follower;
   
  }
}
