import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { FindAllUserService } from '../../../account/services/find-all-users/find-all-users.service';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { FindAllCommentReplyResolver } from './findAll-comment.resolver';
import { FindAllCommentService } from 'src/modules/comment/services/listAll/findAll-comment.service';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';
import { prismaCommentsReplyRepository } from '../../repositories/implementations/PrismaComment-replyRepositories';

describe('FindAllCommentReplyResolver', () => {
  let controller: FindAllCommentReplyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllCommentReplyResolver],
      providers: [
        FindAllCommentService,
        {
          provide: CommentReplyRepository,
          useClass: prismaCommentsReplyRepository,
        },
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<FindAllCommentReplyResolver>(FindAllCommentReplyResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
