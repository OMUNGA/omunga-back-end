import { FollowingService } from '../../services/following/following.service';
import { Resolver, Args, Query} from '@nestjs/graphql';
import { FollowersResult, FollowingResult } from '../../dtos/follow-output';

@Resolver()
export class GetFollowingResolver {
  constructor(private readonly followingSerice: FollowingService) {}

  @Query(() => [FollowingResult])
  
  async GetFollowing(@Args('username') username: string) {
    return await this.followingSerice.getFollowing(username);
  }
}


