import { Test, TestingModule } from '@nestjs/testing';

import { FindAllPostService } from '../../../../modules/post/services/findAll/findAll-post.service';
import { FindAllPostLikeController } from './findAll-post-like.controller';
import { PrismaPostRepository } from '../../../../modules/post/repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../../../modules/post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('FindAllPostLikeController', () => {
  let controller: FindAllPostLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllPostLikeController],
      providers: [
        FindAllPostService,
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

    controller = module.get<FindAllPostLikeController>(
      FindAllPostLikeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
