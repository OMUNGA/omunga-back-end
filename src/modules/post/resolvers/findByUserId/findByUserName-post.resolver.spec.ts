import { Test, TestingModule } from '@nestjs/testing';
import { FindAllPostService } from '../../services/findAll/findAll-post.service';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { FindByUserNamePostsResolver } from './findByUserName-post.resolver';

describe('FindByUserNamePostsResolver', () => {
  let controller: FindByUserNamePostsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindByUserNamePostsResolver],
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

    controller = module.get<FindByUserNamePostsResolver>(FindByUserNamePostsResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
