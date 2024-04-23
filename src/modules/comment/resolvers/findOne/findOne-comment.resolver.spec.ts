import { Test, TestingModule } from '@nestjs/testing';
import { FindOneService } from '../../../account/services/find-one/find-one-user.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../../repositories/implementations/PrismaCommentsRepositories';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { FindOneCommentResolver } from './findOne-comment.resolver';

describe('FindOneCommentResolver', () => {
  let controller: FindOneCommentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneCommentResolver],
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

    controller = module.get<FindOneCommentResolver>(FindOneCommentResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
