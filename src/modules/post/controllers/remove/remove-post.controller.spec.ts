import { Test, TestingModule } from '@nestjs/testing';
import { RemovePostService } from '../../services/remove/remove-post.service';
import { RemovePostController } from './remove-post.controller';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('RemovePostController', () => {
  let controller: RemovePostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemovePostController],
      providers: [
        RemovePostService,
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

    controller = module.get<RemovePostController>(RemovePostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
