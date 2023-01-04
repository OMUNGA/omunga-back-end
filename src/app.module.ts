import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CommentLikeModule } from './modules/comment-like/comment-like.module';
import { CommentModule } from './modules/comment/comment.module';
import { PostModule } from './modules/post/post.module';
import { PostLikeModule } from './modules/post-like/post-like.module';
import { UsersModule } from './modules/account/users.module';

@Module({
  imports: [PrismaModule, CommentModule, PostModule, CommentLikeModule,PostLikeModule,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
