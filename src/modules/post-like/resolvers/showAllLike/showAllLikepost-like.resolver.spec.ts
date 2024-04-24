import { Test, TestingModule } from '@nestjs/testing';

import { showAllTheLikesPostLikeService } from '../../services/showAllLike/showAllLike-post-like.service';
import { PrismaPostRepository } from '../../../post/repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../../post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { ShowAllLikeOfPostLikeResolver } from './showAllLike-post-like.resolver';

describe('ShowAllLikeOfPostLikeResolver', () => {
  let controller: ShowAllLikeOfPostLikeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowAllLikeOfPostLikeResolver],
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

    controller = module.get<ShowAllLikeOfPostLikeResolver>(
      ShowAllLikeOfPostLikeResolver,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
