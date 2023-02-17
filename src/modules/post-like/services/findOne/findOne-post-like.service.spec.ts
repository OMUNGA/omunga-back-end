import { Test, TestingModule } from '@nestjs/testing';
import { FindOnePostLikeService } from './findOne-post-like.service';
import { PrismaPostRepository } from '../../../../modules/post/repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../../../modules/post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('FindOnePostLikeService', () => {
  let service: FindOnePostLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOnePostLikeService,
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

    service = module.get<FindOnePostLikeService>(FindOnePostLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
