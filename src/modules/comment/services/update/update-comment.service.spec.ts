import { Test, TestingModule } from '@nestjs/testing';
import { UpdateCommentService } from './update-comment.service';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('UpdateCommentService', () => {
  let service: UpdateCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateCommentService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<UpdateCommentService>(UpdateCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
