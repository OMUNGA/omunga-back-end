import { Test, TestingModule } from '@nestjs/testing';
import { UnfollowUserController } from './Unfollower.controller';
import { UnFollowerService } from '../../services/unFollower/Unfollower.service';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { PrismaFollowersRepository } from '../../repositories/implementations/PrismaFollowersRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('CreateFollowersController', () => {
  let controller: UnfollowUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnfollowUserController],
      providers: [
        UnFollowerService,
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

    controller = module.get<UnfollowUserController>(UnfollowUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
