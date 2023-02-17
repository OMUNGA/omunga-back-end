import { Test, TestingModule } from '@nestjs/testing';
import { RemoveCommentService } from './remove-comment.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { CommentsRepository } from '../../repositories/CommentsRepositories';

describe('CommentService', () => {
  let service: RemoveCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RemoveCommentService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<RemoveCommentService>(RemoveCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
