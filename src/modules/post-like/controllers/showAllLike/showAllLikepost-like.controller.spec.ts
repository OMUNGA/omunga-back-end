import { Test, TestingModule } from '@nestjs/testing';

import { ShowAllLikeOfPostLikeController } from './showAllLike-post-like.controller';
import { showAllTheLikesPostLikeService } from '../../services/showAllLike/showAllLike-post-like.service';
import { PrismaPostRepository } from '../../../../modules/post/repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../../../modules/post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('ShowAllLikeOfPostLikeController', () => {
  let controller: ShowAllLikeOfPostLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowAllLikeOfPostLikeController],
      providers: [
        showAllTheLikesPostLikeService,
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
    }).compile();

    controller = module.get<ShowAllLikeOfPostLikeController>(
      ShowAllLikeOfPostLikeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
