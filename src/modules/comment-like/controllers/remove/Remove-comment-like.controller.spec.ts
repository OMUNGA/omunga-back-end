import { Test, TestingModule } from '@nestjs/testing';
import { RemoveCommentLikeController } from './Remove-comment-like.controller';
import { RemoveCommentLikeService } from '../../services/remove/Remove-comment-like.service';
import { CommentsRepository } from '../../../../modules/comment/repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../../../modules/comment/repositories/implementations/PrismaCommentsRepositories';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';
import { PrismaCommentLikeRepository } from '../../repositories/implementations/PrismaCommentLinkeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('RemoveCommentLikeController', () => {
  let controller: RemoveCommentLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemoveCommentLikeController],
      providers: [
        RemoveCommentLikeService,
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

    controller = module.get<RemoveCommentLikeController>(
      RemoveCommentLikeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
