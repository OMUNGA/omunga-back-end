import { Test, TestingModule } from '@nestjs/testing';
import { FindOnePostService } from '../../services/findOne/findOne-post.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { FindOnePostResolver } from './findOne-post.resolver';

describe('FindOnePostResolver', () => {
  let controller: FindOnePostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOnePostResolver],
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

    controller = module.get<FindOnePostResolver>(FindOnePostResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
