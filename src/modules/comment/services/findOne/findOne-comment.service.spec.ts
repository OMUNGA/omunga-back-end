import { Test, TestingModule } from '@nestjs/testing';
import { FindOneCommentService } from './findOne-comment.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { CommentsRepository } from '../../repositories/CommentsRepositories';

describe('FindOneCommentService', () => {
  let service: FindOneCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneCommentService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<FindOneCommentService>(FindOneCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
