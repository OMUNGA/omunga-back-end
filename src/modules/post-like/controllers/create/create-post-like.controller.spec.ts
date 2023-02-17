import { Test, TestingModule } from '@nestjs/testing';

import { CreatePostLikeService } from '../../services/create/post-like.service';
import { CreatePostLikeController } from './create-post-like.controller';
import { PrismaPostRepository } from '../../../../modules/post/repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../../../modules/post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('CreatePostLikeController', () => {
  let controller: CreatePostLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatePostLikeController],
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

    controller = module.get<CreatePostLikeController>(CreatePostLikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
