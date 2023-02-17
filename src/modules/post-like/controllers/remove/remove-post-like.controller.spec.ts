import { Test, TestingModule } from '@nestjs/testing';
import { RemovePostLikeController } from './remove-post-like.controller';
import { RemovePostLikeService } from '../../services/remove/remove-post-like.service';
import { PrismaPostRepository } from '../../../../modules/post/repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../../../modules/post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('RemovePostLikeController', () => {
  let controller: RemovePostLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemovePostLikeController],
      providers: [
        RemovePostLikeService,
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

    controller = module.get<RemovePostLikeController>(RemovePostLikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
