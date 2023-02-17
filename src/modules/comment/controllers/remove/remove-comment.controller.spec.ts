import { Test, TestingModule } from '@nestjs/testing';
import { RemoveCommentController } from './remove-comment.controller';
import { RemoveCommentService } from '../../services/remove/remove-comment.service';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('RemoveCommentController', () => {
  let controller: RemoveCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemoveCommentController],
      providers: [
        RemoveCommentService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<RemoveCommentController>(RemoveCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
