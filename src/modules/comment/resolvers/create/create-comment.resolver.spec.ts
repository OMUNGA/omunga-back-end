import { Test, TestingModule } from '@nestjs/testing';
import { CreateCommentService } from '../../services/create/create-comment.service';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateCommentResolver } from './create-comment.resolver';

describe('CreateCommentResolver', () => {
  let controller: CreateCommentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCommentResolver],
      providers: [
        CreateCommentService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<CreateCommentResolver>(CreateCommentResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
