import { Test, TestingModule } from '@nestjs/testing';
import { CreateCommentController } from './create-comment.controller';
import { CreateCommentService } from '../../services/create/create-comment.service';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('CreateCommentController', () => {
  let controller: CreateCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCommentController],
      providers: [
        CreateCommentService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<CreateCommentController>(CreateCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
