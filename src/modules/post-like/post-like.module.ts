import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreatePostLikeController } from './controllers/create/create-post-like.controller';
import { UpdatePostLikeController } from './controllers/update/update-post-like.controller';
import { FindAllPostLikeController } from './controllers/findAll/findAll-post-like.controller';
import { ShowAllLikeOfPostLikeController } from './controllers/showAllLike/showAllLike-post-like.controller';
import { FindOnePostLikeController } from './controllers/findOne/findOne-post-like.controller';
import { RemovePostLikeController } from './controllers/remove/remove-post-like.controller';
import { CreatePostLikeService } from './services/create/post-like.service';
import { UpdatePostLikeService } from './services/update/update-post-like.service';
import { FindOnePostLikeService } from './services/findOne/findOne-post-like.service';
import { FindAllPostLikeService } from './services/findAll/findAll-post-like.service';
import { showAllTheLikesPostLikeService } from './services/showAllLike/showAllLike-post-like.service';
import { RemovePostLikeService } from './services/remove/remove-post-like.service';
import { PostLikeRepository } from './repositories/postLikeRepositories';
import { PrismaPostLikeRepository } from './repositories/implementations/prismaPostLikeRepositories';
import { FindAllPostService } from '../post/services/findAll/findAll-post.service';
import { PostRepository } from '../post/repositories/postRepositories';
import { PrismaPostRepository } from '../post/repositories/implementations/prismaPostRepositories';

@Module({
  controllers: [
    CreatePostLikeController,
    UpdatePostLikeController,
    FindAllPostLikeController,
    RemovePostLikeController,
    ShowAllLikeOfPostLikeController,
    FindOnePostLikeController,
  ],
  providers: [
    CreatePostLikeService,
    UpdatePostLikeService,
    FindOnePostLikeService,
    FindAllPostLikeService,
    showAllTheLikesPostLikeService,
    RemovePostLikeService,
    FindAllPostService,

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
