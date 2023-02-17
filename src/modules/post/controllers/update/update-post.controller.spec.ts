import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePostController } from './update-post.controller';
import { UpdatePostService } from '../../services/update/update-post.service';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';

describe('UpdatePostController', () => {
  let controller: UpdatePostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdatePostController],
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

    controller = module.get<UpdatePostController>(UpdatePostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
