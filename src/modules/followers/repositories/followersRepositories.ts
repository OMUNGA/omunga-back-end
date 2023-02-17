import { AddFollowerDTO } from '../dtos/add-followers.dto';

export abstract class FollowersRepository {
  abstract followUser(
    userID: string,
    userTofollowID: AddFollowerDTO,
  ): Promise<void>;
  abstract unfollowUser(
    userId: string,
    userIdToUnfollow: string,
  ): Promise<void>;
  abstract showMyFollower(userId: string): Promise<number>;
}
