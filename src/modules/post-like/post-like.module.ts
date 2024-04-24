import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { showAllTheLikesPostLikeService } from './services/showAllLike/showAllLike-post-like.service';
import { RemovePostLikeService } from './services/remove/remove-post-like.service';
import { PostLikeRepository } from './repositories/postLikeRepositories';
import { PrismaPostLikeRepository } from './repositories/implementations/prismaPostLikeRepositories';
import { PostRepository } from '../post/repositories/postRepositories';
import { PrismaPostRepository } from '../post/repositories/implementations/prismaPostRepositories';
import { CreatePostLikeResolver } from './resolvers/create/create-post-like.resolver';
import { ShowAllLikeOfPostLikeResolver } from './resolvers/showAllLike/showAllLike-post-like.resolver';
import { RemovePostLikeResolver } from './resolvers/remove/remove-post-like.resolver';
import { CreatePostLikeService } from './services/create/post-like.service';

@Module({
  controllers: [],
  providers: [
    CreatePostLikeService,
    showAllTheLikesPostLikeService,
    RemovePostLikeService,

    CreatePostLikeResolver,
    ShowAllLikeOfPostLikeResolver,
    RemovePostLikeResolver,

    {
      provide: PostLikeRepository,
      useClass: PrismaPostLikeRepository,
    },
    {
      provide: PostRepository,
      useClass: PrismaPostRepository,
    },
  ],
  imports: [PrismaModule],
})
export class PostLikeModule {}
