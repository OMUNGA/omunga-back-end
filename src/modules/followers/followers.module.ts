import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { AddFollowerService } from './services/Add-follower/Add-follower.service';
import { AddFollowerController } from './controllers/Add-follower/Add-follower.controller';
import { FollowingService } from './services/following/following.service';
import { FollowingController } from './controllers/following/following.controller';
import { FollowersRepository } from './repositories/followersRepositories';
import { PrismaFollowersRepository } from './repositories/implementations/PrismaFollowersRepository';
import { UnfollowUserController } from './controllers/UnfollowerUser/Unfollower.controller';
import { UnFollowerService } from './services/unFollower/Unfollower.service';
import { ShowMyFollowerController } from './controllers/ShowMyfollowers/showMyfollowers.controller';
import { ShowMyFollowersService } from './services/ShowMyfollowers/showMyfollowers.service';
import { CreateUsersRepository } from '../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../account/repositories/implementations/PrismaCreateUserRepository';

@Module({
  providers: [
    AddFollowerService,
    ShowMyFollowersService,
    UnFollowerService,
    FollowingService,

    {
      provide: FollowersRepository,
      useClass: PrismaFollowersRepository,
    },
    {
      provide: CreateUsersRepository,
      useClass: PrismaCreateUserRepository,
    },
  ],
  controllers: [
    AddFollowerController,
    ShowMyFollowerController,
    UnfollowUserController,
    FollowingController,
  ],
  imports: [PrismaModule],
})
export class FollowersModule {}
