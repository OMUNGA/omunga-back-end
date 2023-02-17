import { Test, TestingModule } from '@nestjs/testing';

import { UpdatePostLikeController } from './update-post-like.controller';
import { UpdatePostLikeService } from '../../services/update/update-post-like.service';
import { PrismaPostRepository } from '../../../../modules/post/repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../../../modules/post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('UpdatePostLikeController', () => {
  let controller: UpdatePostLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdatePostLikeController],
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

    controller = module.get<UpdatePostLikeController>(UpdatePostLikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
