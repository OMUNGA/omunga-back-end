import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { RemoveCommentReplyResolver } from './remove-commentReply.resolver';
import { RemoveCommentReplyService } from '../../services/remove/remove-commentReply.service';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';
import { prismaCommentsReplyRepository } from '../../repositories/implementations/PrismaComment-replyRepositories';

describe('RemoveCommentReplyResolver', () => {
  let controller: RemoveCommentReplyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveCommentReplyResolver,
        RemoveCommentReplyService,
        {
          provide: CommentReplyRepository,
          useClass: prismaCommentsReplyRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<RemoveCommentReplyResolver>(RemoveCommentReplyResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
