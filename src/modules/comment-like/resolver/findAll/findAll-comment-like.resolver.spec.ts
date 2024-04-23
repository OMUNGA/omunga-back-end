import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCommentLikeService } from '../../services/findAll/findAll-comment-like.service';
import { PrismaCommentLikeRepository } from '../../repositories/implementations/PrismaCommentLinkeRepositories';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';
import { CommentsRepository } from '../../../comment/repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../../comment/repositories/implementations/PrismaCommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { FindAllCommentLikeResolver } from './findAll-comment-like.resolver';

describe('FindAllCommentLikeResolver', () => {
  let controller: FindAllCommentLikeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllCommentLikeResolver],
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

    controller = module.get<FindAllCommentLikeResolver>(
      FindAllCommentLikeResolver,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
