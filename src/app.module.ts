import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

import { CommentModule } from './comment/comment.module';

@Module({
  imports: [PrismaModule, CommentModule],

import { PostModule } from './post/post.module';

@Module({
  imports: [PrismaModule, PostModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
