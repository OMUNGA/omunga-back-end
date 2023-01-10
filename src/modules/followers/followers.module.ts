import { Module } from '@nestjs/common';
import { CreateFollowersService } from './services/create-followers/create-followers.service';
import { CreateFollowersController } from './controllers/create-followers/create-followers.controller';

@Module({
  providers: [CreateFollowersService],
  controllers: [CreateFollowersController],
})
export class FollowersModule {}
