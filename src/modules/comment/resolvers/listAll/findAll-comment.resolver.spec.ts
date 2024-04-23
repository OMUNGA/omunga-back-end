import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { FindAllCommentService } from '../../services/listAll/findAll-comment.service';
import { FindAllUserService } from '../../../account/services/find-all-users/find-all-users.service';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { FindAllCommentResolver } from './findAll-comment.resolver';

describe('FindAllCommentResolver', () => {
  let controller: FindAllCommentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllCommentResolver],
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

    controller = module.get<FindAllCommentResolver>(FindAllCommentResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
