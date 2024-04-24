import { FollowerDTO } from '../dtos/add-followers.dto';
import { Followers } from '../entities/followers';

export abstract class FollowersRepository {
  abstract followUser(data: FollowerDTO): Promise<Followers>;
  abstract unfollowUser(data: FollowerDTO): Promise<void>;
  abstract getFollowers(userId: string): Promise<Followers[]>;
  abstract findOne(userId: string, userIdToFollow: string): Promise<Followers>;
  abstract getFollowing(userId: string): Promise<Followers[]>;
}
