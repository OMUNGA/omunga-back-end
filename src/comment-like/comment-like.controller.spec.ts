import { Test, TestingModule } from '@nestjs/testing';
import { CommentLikeController } from './comment-like.controller';
import { CommentLikeService } from './comment-like.service';

describe('CommentLikeController', () => {
  let controller: CommentLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentLikeController],
      providers: [CommentLikeService],
    }).compile();

    controller = module.get<CommentLikeController>(CommentLikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
