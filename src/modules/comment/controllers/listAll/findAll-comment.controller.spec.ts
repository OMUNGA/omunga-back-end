import { Test, TestingModule } from '@nestjs/testing';
import { FindAllCommentController } from './findAll-comment.controller';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { FindAllCommentService } from '../../services/listAll/findAll-comment.service';
import { FindAllUserService } from '../../../../modules/account/services/find-all-users/find-all-users.service';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';

describe('FindAllCommentController', () => {
  let controller: FindAllCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllCommentController],
      providers: [
        FindAllCommentService,
        FindAllUserService,
        {
          provide: CommentsRepository,
          useClass: prismaCommentsRepository,
        },
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<FindAllCommentController>(FindAllCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
