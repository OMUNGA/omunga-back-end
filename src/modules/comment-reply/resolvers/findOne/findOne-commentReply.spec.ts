import { Test, TestingModule } from '@nestjs/testing';
import { FindOneService } from '../../../account/services/find-one/find-one-user.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { FindOneCommentResolver } from './findOne-commentReply.resolver';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';
import { prismaCommentsReplyRepository } from '../../repositories/implementations/PrismaComment-replyRepositories';

describe('FindOneCommentResolver', () => {
  let controller: FindOneCommentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneCommentResolver],
      providers: [
        FindOneService,
        {
          provide: CommentReplyRepository,
          useClass: prismaCommentsReplyRepository,
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
