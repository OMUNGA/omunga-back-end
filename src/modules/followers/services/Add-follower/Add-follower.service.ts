import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FollowerDTO } from '../../dtos/add-followers.dto';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class AddFollowerService {
  constructor(
    private followerRepo: FollowersRepository,
    private userRepo: CreateUsersRepository,
  ) {}

  async followUser(data: FollowerDTO) {
    const existingFollower = await this.followerRepo.findOne(
      data.userID,
      data.userIdToFollow,
    );
    if (existingFollower) {
      throw new UnauthorizedException(messages.AlreadyFollowing);
    }

    const user = await this.userRepo.findById(data.userID);
    if (!user) {
      throw new UnauthorizedException(messages.NotFoundUser);
    }
    const followrs = await this.followerRepo.followUser(data);
    return followrs;
  }
}
