import { Injectable, UnauthorizedException } from '@nestjs/common';
import { FollowerDTO } from '../../dtos/add-followers.dto';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { messages } from './../../../../../shared/errorsMessages';


@Injectable()
export class AddFollowerService {
  constructor(
    private followerRepo: FollowersRepository,
    private userRepo: CreateUsersRepository,
  ) {}

  async followUser(userID: string, data: FollowerDTO) {
    const userToFollow = await this.userRepo.findById(data.userToFollowId);
    if (!userToFollow) {
      throw new UnauthorizedException(messages.userNotFound);
    }

    const existingFollower = await this.followerRepo.findOne(userID, data.userToFollowId);
    if (existingFollower) {
      throw new UnauthorizedException(messages.AlreadyFollowing);
    }

    const user = await this.userRepo.findById(userID);
    if (!user) {
      throw new UnauthorizedException(messages.NotFoundUser);
    }

    const followers = await this.followerRepo.followUser(userID, data);
    return followers;
  }
}
