import { Test, TestingModule } from '@nestjs/testing';
import { FindAllPostService } from '../../services/findAll/findAll-post.service';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { FindAllPostsResolver } from './findAll-post.resolver';

describe('FindAllPostsResolver', () => {
  let controller: FindAllPostsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllPostsResolver],
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

    controller = module.get<FindAllPostsResolver>(FindAllPostsResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
