import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RemoveFollowerService } from './services/remove/remove-followers.service';
import { RemoveFollowersController } from './controllers/remove/remove-followers.controller';
import { UpdateFollowersService } from './services/update/update-followers.service';
import { UpdateFollowersController } from './controllers/update/update.controller';
import { FollowersService } from './services/followers/followers.service';
import { FollowersController } from './controllers/followers/followers.controller';
import { AddFollowerService } from './services/Add-follower/Add-follower.service';
import { AddFollowerController } from './controllers/Add-follower/Add-follower.controller';
import { FollowingService } from './services/following/following.service';
import { FollowingController } from './controllers/following/following.controller';

@Module({
  providers: [
    AddFollowerService,
    FollowersService,
    RemoveFollowerService,
    UpdateFollowersService,
    FollowingService,
  ],
  controllers: [
    AddFollowerController,
    FollowersController,
    RemoveFollowersController,
    UpdateFollowersController,
    FollowingController,
  ],
  imports: [PrismaModule],
})
export class FollowersModule {}
