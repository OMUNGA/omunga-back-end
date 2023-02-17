import { Test, TestingModule } from '@nestjs/testing';
import { UpdateCommentService } from '../../services/update/update-comment.service';
import { UpdateCommentController } from './update-comment.controller';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('CommentController', () => {
  let controller: UpdateCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateCommentController],
      providers: [
        UpdateCommentService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<UpdateCommentController>(UpdateCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
