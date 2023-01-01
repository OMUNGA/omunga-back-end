import { Module } from '@nestjs/common';
import { PostLikeService } from './post-like.service';
import { PostLikeController } from './post-like.controller';

@Module({
  controllers: [PostLikeController],
  providers: [PostLikeService]
})
export class PostLikeModule {}
