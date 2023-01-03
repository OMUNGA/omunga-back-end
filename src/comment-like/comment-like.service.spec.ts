import { Test, TestingModule } from '@nestjs/testing';
import { CommentLikeService } from './comment-like.service';

describe('CommentLikeService', () => {
  let service: CommentLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentLikeService],
    }).compile();

    service = module.get<CommentLikeService>(CommentLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
