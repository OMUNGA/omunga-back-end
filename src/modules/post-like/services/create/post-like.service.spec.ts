import { Test, TestingModule } from '@nestjs/testing';
import { CreatePostLikeService } from './post-like.service';
import { PrismaPostRepository } from '../../../../modules/post/repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../../../modules/post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('CreatePostLikeService', () => {
  let service: CreatePostLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreatePostLikeService,
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

    service = module.get<CreatePostLikeService>(CreatePostLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
