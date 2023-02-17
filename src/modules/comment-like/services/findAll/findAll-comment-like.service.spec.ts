import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCommentLikeService } from './findAll-comment-like.service';
import { CommentsRepository } from '../../../../modules/comment/repositories/CommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { prismaCommentsRepository } from '../../../../modules/comment/repositories/implementations/PrismaCommentsRepositories';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';
import { PrismaCommentLikeRepository } from '../../repositories/implementations/PrismaCommentLinkeRepositories';

describe('FindAllCommentLikeService', () => {
  let service: FindAllCommentLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllCommentLikeService,
        {
          provide: CommentLikesRepository,
          useClass: PrismaCommentLikeRepository,
        },
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<FindAllCommentLikeService>(FindAllCommentLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
