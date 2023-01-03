import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

import { CommentModule } from './modules/comment/comment.module';
import { PostModule } from './modules/post/post.module';
import { UsersModule } from './modules/account/users.module';

@Module({
  imports: [PrismaModule, UsersModule, CommentModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
