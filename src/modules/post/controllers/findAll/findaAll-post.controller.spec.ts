import { Test, TestingModule } from '@nestjs/testing';
import { FindAllPostService } from '../../services/findAll/findAll-post.service';
import { FindAllPostController } from './findAll-post.controller';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';

describe('FindAllPostController', () => {
  let controller: FindAllPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAllPostController],
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

    controller = module.get<FindAllPostController>(FindAllPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
