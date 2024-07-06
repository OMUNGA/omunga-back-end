import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateCommentReplyService } from './create-comment.service';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';
import { prismaCommentsReplyRepository } from '../../repositories/implementations/PrismaComment-replyRepositories';

describe('CreateCommentReplyService', () => {
  let service: CreateCommentReplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateCommentReplyService,
        {
          provide: CommentReplyRepository,
          useClass: prismaCommentsReplyRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<CreateCommentReplyService>(CreateCommentReplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
