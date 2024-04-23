import { Test, TestingModule } from '@nestjs/testing';
import { CreateCommentLikeService } from '../../services/create/create-comment-like.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';
import { PrismaCommentLikeRepository } from '../../repositories/implementations/PrismaCommentLinkeRepositories';
import { CommentsRepository } from '../../../comment/repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../../comment/repositories/implementations/PrismaCommentsRepositories';
import { CreateCommentLikeResolver } from './create-comment-like.resolver';

describe('CreateCommentLikeResolver', () => {
  let controller: CreateCommentLikeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCommentLikeResolver],
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

    controller = module.get<CreateCommentLikeResolver>(
      CreateCommentLikeResolver,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
