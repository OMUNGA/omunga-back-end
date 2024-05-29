import { Test, TestingModule } from '@nestjs/testing';
import { FindAllPostService } from '../../services/findAll/findAll-post.service';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { FindByUserIDPostsResolver } from './findByUserID-post.resolver';

describe('FindByUserIDPostsResolver', () => {
  let controller: FindByUserIDPostsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindByUserIDPostsResolver],
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

    controller = module.get<FindByUserIDPostsResolver>(FindByUserIDPostsResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
