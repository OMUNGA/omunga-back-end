import { Test, TestingModule } from '@nestjs/testing';
import { UpdateCommentService } from '../../services/update/update-comment.service';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { UpdateCommentResolver } from './update-comment.resolver';

describe('UpdateCommentResolver', () => {
  let controller: UpdateCommentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateCommentResolver],
      providers: [
        UpdateCommentService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<UpdateCommentResolver>(UpdateCommentResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
