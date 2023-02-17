import { Test, TestingModule } from '@nestjs/testing';
import { FindAllPostService } from './findAll-post.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PostRepository } from '../../repositories/postRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';

describe('FindAllPostService', () => {
  let service: FindAllPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllPostService,
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

    service = module.get<FindAllPostService>(FindAllPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
