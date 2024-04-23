import { Test, TestingModule } from '@nestjs/testing';
import { FollowingService } from '../../services/following/following.service';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { PrismaFollowersRepository } from '../../repositories/implementations/PrismaFollowersRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { GetFollowingResolver } from './get-following.resolver';

describe('GetFollowingResolver', () => {
  let controller: GetFollowingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetFollowingResolver],
      providers: [
        FollowingService,

        {
          provide: FollowersRepository,
          useClass: PrismaFollowersRepository,
        },
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<GetFollowingResolver>(GetFollowingResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
