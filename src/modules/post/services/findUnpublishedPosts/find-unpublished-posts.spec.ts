import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PostRepository } from '../../repositories/postRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { findUnpublishedPostsService } from './find-unpublished-posts.service';

describe('findUnpublishedPostsService', () => {
  let service: findUnpublishedPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        findUnpublishedPostsService,
        {
          provide: PostRepository,
          useClass: PrismaPostRepository,
        },
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<findUnpublishedPostsService>(findUnpublishedPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
