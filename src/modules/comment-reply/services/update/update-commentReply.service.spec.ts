import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { UpdateCommentReplyService } from './update-commentReply.service';
import { prismaCommentsReplyRepository } from '../../repositories/implementations/PrismaComment-replyRepositories';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';

describe('UpdateCommentReplyService', () => {
  let service: UpdateCommentReplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateCommentReplyService,
        {
          provide: CommentReplyRepository,
          useClass: prismaCommentsReplyRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<UpdateCommentReplyService>(UpdateCommentReplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
