import { Test, TestingModule } from '@nestjs/testing';
import { FindOneCommentController } from './findOne-comment.controller';
import { FindOneService } from '../../../../modules/account/services/find-one/find-one-user.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';

describe('FindOneCommentController', () => {
  let controller: FindOneCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneCommentController],
      providers: [
        FindOneService,
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

    controller = module.get<FindOneCommentController>(FindOneCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
