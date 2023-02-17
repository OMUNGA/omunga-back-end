import { Test, TestingModule } from '@nestjs/testing';
import { FindOnePostController } from './post.controller';
import { FindOnePostService } from '../../services/findOne/findOne-post.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';

describe('FindOnePostController', () => {
  let controller: FindOnePostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOnePostController],
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

    controller = module.get<FindOnePostController>(FindOnePostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
