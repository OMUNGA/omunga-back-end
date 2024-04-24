import { Test, TestingModule } from '@nestjs/testing';
import { RemoveCommentLikeService } from '../../services/remove/Remove-comment-like.service';
import { CommentsRepository } from '../../../comment/repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../../comment/repositories/implementations/PrismaCommentsRepositories';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';
import { PrismaCommentLikeRepository } from '../../repositories/implementations/PrismaCommentLinkeRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { RemoveCommentLikeResolver } from './Remove-comment-like.resolver';

describe('RemoveCommentLikeResolver', () => {
  let controller: RemoveCommentLikeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemoveCommentLikeResolver],
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

    controller = module.get<RemoveCommentLikeResolver>(
      RemoveCommentLikeResolver,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
