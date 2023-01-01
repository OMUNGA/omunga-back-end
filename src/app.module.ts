import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { PostLikeModule } from './post-like/post-like.module';

@Module({
  imports: [PrismaModule, PostModule, PostLikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
