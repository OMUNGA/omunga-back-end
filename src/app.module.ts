import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './modules/comment/comment.module';
import { PostModule } from './modules/post/post.module';
import { UsersModule } from './modules/account/users.module';

@Module({
  imports: [PrismaModule, UsersModule, CommentModule, PostModule],
})
export class AppModule {}
