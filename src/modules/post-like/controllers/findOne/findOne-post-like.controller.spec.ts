import { Test, TestingModule } from '@nestjs/testing';

import { FindOnePostLikeController } from './findOne-post-like.controller';
import { FindOnePostLikeService } from '../../services/findOne/findOne-post-like.service';
import { PrismaPostRepository } from '../../../../modules/post/repositories/implementations/prismaPostRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostRepository } from '../../../../modules/post/repositories/postRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';

describe('FindOnePostLikeController', () => {
  let controller: FindOnePostLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOnePostLikeController],
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

    controller = module.get<FindOnePostLikeController>(
      FindOnePostLikeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
