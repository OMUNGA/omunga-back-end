import { Test, TestingModule } from '@nestjs/testing';
import { SearchPostService } from '../../services/search/search-post.service';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { FindPostsByUserAndTitleResolver } from './find-posts-by-user-and-title.resolver';

describe('FindPostsByUserAndTitleResolver', () => {
  let controller: FindPostsByUserAndTitleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindPostsByUserAndTitleResolver],
      providers: [
        SearchPostService,
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

    controller = module.get<FindPostsByUserAndTitleResolver>(FindPostsByUserAndTitleResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
