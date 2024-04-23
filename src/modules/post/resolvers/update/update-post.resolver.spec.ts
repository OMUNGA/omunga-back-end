import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePostService } from '../../services/update/update-post.service';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaPostRepository } from '../../repositories/implementations/prismaPostRepositories';
import { PostRepository } from '../../repositories/postRepositories';
import { UpdatePostResolver } from './update-post.resolver';

describe('UpdatePostResolver', () => {
  let controller: UpdatePostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdatePostResolver],
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

    controller = module.get<UpdatePostResolver>(UpdatePostResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
