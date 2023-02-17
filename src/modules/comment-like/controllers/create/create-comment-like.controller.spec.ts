import { Test, TestingModule } from '@nestjs/testing';
import { CreateCommentLikeController } from './create-comment-like.controller';
import { CreateCommentLikeService } from '../../services/create/create-comment-like.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';
import { PrismaCommentLikeRepository } from '../../repositories/implementations/PrismaCommentLinkeRepositories';
import { CommentsRepository } from '../../../../modules/comment/repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../../../modules/comment/repositories/implementations/PrismaCommentsRepositories';

describe('CreateCommentLikeController', () => {
  let controller: CreateCommentLikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCommentLikeController],
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

    controller = module.get<CreateCommentLikeController>(
      CreateCommentLikeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
