import { Test, TestingModule } from '@nestjs/testing';

import { CreatePostLikeService } from '../../services/create/post-like.service';
import { PrismaPostRepository } from '../../../post/repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../../post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreatePostLikeResolver } from './create-post-like.resolver';

describe('CreatePostLikeResolver', () => {
  let controller: CreatePostLikeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatePostLikeResolver],
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

    controller = module.get<CreatePostLikeResolver>(CreatePostLikeResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
