import { Test, TestingModule } from '@nestjs/testing';
import { showAllTheLikesPostLikeService } from './showAllLike-post-like.service';
import { PrismaPostRepository } from '../../../../modules/post/repositories/implementations/prismaPostRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { PostRepository } from '../../../../modules/post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';

describe('showAllTheLikesPostLikeService', () => {
  let service: showAllTheLikesPostLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<showAllTheLikesPostLikeService>(
      showAllTheLikesPostLikeService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
