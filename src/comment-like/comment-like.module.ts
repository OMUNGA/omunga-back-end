import { Module } from '@nestjs/common';
import { CommentLikeService } from './comment-like.service';
import { CommentLikeController } from './comment-like.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CommentLikeController],
  providers: [CommentLikeService],
  imports: [PrismaModule],
})
export class CommentLikeModule {}
