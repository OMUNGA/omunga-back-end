import { Module } from '@nestjs/common';
import { PostLikeService } from './post-like.service';
import { PostLikeController } from './post-like.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PostLikeController],
  providers: [PostLikeService],
  imports: [PrismaModule],
})
export class PostLikeModule {}
