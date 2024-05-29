import { Test, TestingModule } from '@nestjs/testing';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { FindbyUserIDPostService } from './findByUserId-post.service';

describe('FindbyUserIDPostService', () => {
  let service: FindbyUserIDPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindbyUserIDPostService,
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

    service = module.get<FindbyUserIDPostService>(FindbyUserIDPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
