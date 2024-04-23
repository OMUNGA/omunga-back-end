import { Test, TestingModule } from '@nestjs/testing';
import { RemovePostService } from '../../services/remove/remove-post.service';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { RemovePostResolver } from './remove-post.resolver';

describe('RemovePostResolver', () => {
  let controller: RemovePostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemovePostResolver],
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

    controller = module.get<RemovePostResolver>(RemovePostResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
