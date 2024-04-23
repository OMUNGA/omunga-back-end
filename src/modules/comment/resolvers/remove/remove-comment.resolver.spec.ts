import { Test, TestingModule } from '@nestjs/testing';
import { RemoveCommentService } from '../../services/remove/remove-comment.service';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { RemoveCommentResolver } from './remove-comment.resolver';

describe('RemoveCommentResolver', () => {
  let controller: RemoveCommentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemoveCommentResolver],
      providers: [
        RemoveCommentService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<RemoveCommentResolver>(RemoveCommentResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
