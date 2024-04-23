import { Test, TestingModule } from '@nestjs/testing';
import { RemovePostLikeService } from '../../services/remove/remove-post-like.service';
import { PrismaPostRepository } from '../../../post/repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../../post/repositories/postRepositories';
import { PrismaPostLikeRepository } from '../../repositories/implementations/prismaPostLikeRepositories';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { RemovePostLikeResolver } from './remove-post-like.resolver';

describe('RemovePostLikeResolver', () => {
  let controller: RemovePostLikeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemovePostLikeResolver],
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

    controller = module.get<RemovePostLikeResolver>(RemovePostLikeResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
