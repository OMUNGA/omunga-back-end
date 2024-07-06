import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateCommentReplyResolver } from './create-comment-reply.resolver';
import { CreateCommentReplyService } from '../../services/create/create-comment.service';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';
import { prismaCommentsReplyRepository } from '../../repositories/implementations/PrismaComment-replyRepositories';

describe('CreateCommentReplyResolver', () => {
  let controller: CreateCommentReplyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCommentReplyResolver],
      providers: [
        CreateCommentReplyService,
        {
          provide: CommentReplyRepository,
          useClass: prismaCommentsReplyRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<CreateCommentReplyResolver>(CreateCommentReplyResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
