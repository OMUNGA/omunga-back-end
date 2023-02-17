import { Test, TestingModule } from '@nestjs/testing';
import { CreatePostService } from '../../services/create/create-post.service';
import { CreatePostController } from './create-post.controller';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('CreatePostController', () => {
  let controller: CreatePostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatePostController],
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

    controller = module.get<CreatePostController>(CreatePostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
