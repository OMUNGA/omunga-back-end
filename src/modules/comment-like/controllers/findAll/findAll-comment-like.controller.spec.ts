import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCommentLikeController } from './findAll-comment-like.controller';
import { FindAllCommentLikeService } from '../../services/findAll/findAll-comment-like.service';
import { PrismaCommentLikeRepository } from '../../repositories/implementations/PrismaCommentLinkeRepositories';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';
import { CommentsRepository } from '../../../../modules/comment/repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../../../modules/comment/repositories/implementations/PrismaCommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('FindAllCommentLikeController', () => {
  let controller: FindAllCommentLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllCommentLikeController],
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

    controller = module.get<FindAllCommentLikeController>(
      FindAllCommentLikeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
