import { Test, TestingModule } from '@nestjs/testing';
import { CreatePostService } from '../../services/create/create-post.service';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreatePostResolver } from './create-post.resolver';

describe('CreatePostResolver', () => {
  let controller: CreatePostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatePostResolver],
      providers: [
        CreatePostService,
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

    controller = module.get<CreatePostResolver>(CreatePostResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
