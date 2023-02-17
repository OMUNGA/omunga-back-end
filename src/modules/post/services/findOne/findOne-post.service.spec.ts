import { Test, TestingModule } from '@nestjs/testing';
import { FindOnePostService } from './findOne-post.service';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('FindOnePostService', () => {
  let service: FindOnePostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOnePostService,
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

    service = module.get<FindOnePostService>(FindOnePostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
