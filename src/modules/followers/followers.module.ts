import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { AddFollowerService } from './services/Add-follower/Add-follower.service';
import { FollowingService } from './services/following/following.service';
import { FollowersRepository } from './repositories/followersRepositories';
import { PrismaFollowersRepository } from './repositories/implementations/PrismaFollowersRepository';
import { UnFollowerService } from './services/unFollower/Unfollower.service';
import { CreateUsersRepository } from '../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../account/repositories/implementations/PrismaCreateUserRepository';
import { AddFollowerResolver } from './resolvers/Add-follower/Add-follower.resolver';
import { GetFollowingResolver } from './resolvers/following/get-following.resolver';
import { UnfollowUserResolver } from './resolvers/UnfollowerUser/Unfollower.resolver';
import { GetFollowersService } from './services/ShowMyfollowers/getfollowers.service';
import { GetFollowersResolver } from './resolvers/ShowMyfollowers/getfollowers.resolver';

@Module({
  providers: [
    AddFollowerService,
    GetFollowersService,
    UnFollowerService,
    FollowingService,


    AddFollowerResolver,
    GetFollowingResolver,
    UnfollowUserResolver,
    GetFollowersResolver,
    
    {
      provide: FollowersRepository,
      useClass: PrismaFollowersRepository,
    },
    {
      provide: CreateUsersRepository,
      useClass: PrismaCreateUserRepository,
    },
  ],
  controllers: [],
  imports: [PrismaModule],
})
export class FollowersModule {}
