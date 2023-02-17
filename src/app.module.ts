import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CommentLikeModule } from './modules/comment-like/comment-like.module';
import { CommentModule } from './modules/comment/comment.module';
import { PostModule } from './modules/post/post.module';
import { PostLikeModule } from './modules/post-like/post-like.module';
import { UsersModule } from './modules/account/users.module';

import { FollowersModule } from './modules/followers/followers.module';

import { SocialNetworkModule } from './modules/social-network/social-network.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    CommentModule,
    PostModule,
    CommentLikeModule,
    PostLikeModule,
    FollowersModule,
    SocialNetworkModule,
    PassportModule.register({ session: true }),
  ],
})
export class AppModule {}
