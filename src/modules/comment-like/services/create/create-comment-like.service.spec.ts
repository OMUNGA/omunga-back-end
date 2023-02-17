import { Test, TestingModule } from '@nestjs/testing';
import { CreateCommentLikeService } from './create-comment-like.service';
import { CommentsRepository } from '../../../../modules/comment/repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../../../modules/comment/repositories/implementations/PrismaCommentsRepositories';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';
import { PrismaCommentLikeRepository } from '../../repositories/implementations/PrismaCommentLinkeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('CreateCommentLikeService', () => {
  let service: CreateCommentLikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateCommentLikeService,
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

    service = module.get<CreateCommentLikeService>(CreateCommentLikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
