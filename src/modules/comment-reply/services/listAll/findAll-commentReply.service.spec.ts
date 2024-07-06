import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { FindAllReplyCommentService } from './findAll-commentReply.service';
import { prismaCommentsReplyRepository } from '../../repositories/implementations/PrismaComment-replyRepositories';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';

describe('FindAllReplyCommentService', () => {
  let service: FindAllReplyCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllReplyCommentService,
        {
          provide: CommentReplyRepository,
          useClass: prismaCommentsReplyRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<FindAllReplyCommentService>(FindAllReplyCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
