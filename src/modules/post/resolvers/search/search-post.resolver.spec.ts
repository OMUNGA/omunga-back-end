import { Test, TestingModule } from '@nestjs/testing';
import { SearchPostService } from '../../services/search/search-post.service';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { SearchPostResolver } from './search-post.resolver';

describe('SearchPostResolver', () => {
  let controller: SearchPostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchPostResolver],
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

    controller = module.get<SearchPostResolver>(SearchPostResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
