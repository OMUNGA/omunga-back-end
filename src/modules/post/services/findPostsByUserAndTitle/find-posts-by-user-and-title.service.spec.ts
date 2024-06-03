import { Test, TestingModule } from '@nestjs/testing';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { FindPostsByUserAndTitleService } from './find-posts-by-user-and-title.service';

describe('FindPostsByUserAndTitleService', () => {
  let service: FindPostsByUserAndTitleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindPostsByUserAndTitleService,
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

    service = module.get<FindPostsByUserAndTitleService>(FindPostsByUserAndTitleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
