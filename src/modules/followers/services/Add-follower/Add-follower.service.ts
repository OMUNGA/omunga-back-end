import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AddFollowerDTO } from '../../dtos/add-followers.dto';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';

@Injectable()
export class AddFollowerService {
  constructor(
    private followerRepo: FollowersRepository,
    private userRepo: CreateUsersRepository,
  ) {}

  async followUser(userId: string, data: AddFollowerDTO) {
    try {
      const user = await this.userRepo.findById(userId);
      if (!user) {
        throw new UnauthorizedException('Ups, precisa estar logado!');
      }
      const followrs = await this.followerRepo.followUser(userId, data);
      return followrs;
    } catch (error) {
      return { error: error.message };
    }
  }
}
