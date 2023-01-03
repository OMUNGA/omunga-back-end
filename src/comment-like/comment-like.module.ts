import { Module } from '@nestjs/common';
import { CommentLikeService } from './comment-like.service';
import { CommentLikeController } from './comment-like.controller';

@Module({
  controllers: [CommentLikeController],
  providers: [CommentLikeService]
})
export class CommentLikeModule {}
