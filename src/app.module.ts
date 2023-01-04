import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CommentLikeModule } from './comment-like/comment-like.module';
import { CommentModule } from './modules/comment/comment.module';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [PrismaModule, CommentModule, PostModule, CommentLikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
