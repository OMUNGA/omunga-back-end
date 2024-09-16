import { FollowerDTO } from '../dtos/add-followers.dto';
import { FollowersResult, FollowingResult } from '../dtos/follow-output';
import { Followers } from '../entities/followers';

export abstract class FollowersRepository {
  abstract followUser(userID: string, data: FollowerDTO): Promise<Followers>;
  abstract unfollowUser( followID: string): Promise<{ msg: string }> ;
  abstract getFollowers(userId: string): Promise<FollowersResult[]>;
  abstract findOne(userId: string, userIdToFollow: string): Promise<Followers>;
  abstract getAllFollowing(username: string): Promise<FollowingResult[]>
}
