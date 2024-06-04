import { Test, TestingModule } from '@nestjs/testing';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { FindbyUserNamePostService } from './findByUserName-post.service';

describe('FindbyUserNamePostService', () => {
  let service: FindbyUserNamePostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindbyUserNamePostService,
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

    service = module.get<FindbyUserNamePostService>(FindbyUserNamePostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
