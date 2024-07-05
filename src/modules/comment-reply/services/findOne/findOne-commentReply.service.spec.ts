import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { FindOneCommentReplyService } from './findOne-commentReply.service';
import { prismaCommentsReplyRepository } from '../../repositories/implementations/PrismaComment-replyRepositories';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';

describe('FindOneCommentReplyService', () => {
  let service: FindOneCommentReplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneCommentReplyService,
        {
          provide: CommentReplyRepository,
          useClass: prismaCommentsReplyRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<FindOneCommentReplyService>(FindOneCommentReplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
