import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCommentService } from './findAll-comment.service';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('FindAllCommentService', () => {
  let service: FindAllCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllCommentService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<FindAllCommentService>(FindAllCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
