import { Test, TestingModule } from '@nestjs/testing';
import { PostLikeController } from './post-like.controller';
import { PostLikeService } from './post-like.service';

describe('PostLikeController', () => {
  let controller: PostLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostLikeController],
      providers: [PostLikeService],
    }).compile();

    controller = module.get<PostLikeController>(PostLikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
