import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePostService } from './update-post.service';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('UpdatePostService', () => {
  let service: UpdatePostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdatePostService,
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

    service = module.get<UpdatePostService>(UpdatePostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
