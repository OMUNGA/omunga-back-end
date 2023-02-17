import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePostLikeService } from './update-post-like.service';
import { PrismaPostRepository } from '../../../../modules/post/repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../../../modules/post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('UpdatePostLikeService', () => {
  let service: UpdatePostLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdatePostLikeService,
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

    service = module.get<UpdatePostLikeService>(UpdatePostLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
