import { Test, TestingModule } from '@nestjs/testing';
import { SearchPostController } from './search-post.controller';
import { SearchPostService } from '../../services/search/search-post.service';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('SearchPostController', () => {
  let controller: SearchPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchPostController],
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

    controller = module.get<SearchPostController>(SearchPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
