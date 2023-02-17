import { Test, TestingModule } from '@nestjs/testing';
import { CreateCommentService } from './create-comment.service';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('CreateCommentService', () => {
  let service: CreateCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateCommentService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<CreateCommentService>(CreateCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
