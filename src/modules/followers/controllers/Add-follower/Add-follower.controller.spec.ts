import { Test, TestingModule } from '@nestjs/testing';
import { AddFollowerController } from './Add-follower.controller';
import { AddFollowerService } from '../../services/Add-follower/Add-follower.service';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { PrismaFollowersRepository } from '../../repositories/implementations/PrismaFollowersRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('CreateFollowersController', () => {
  let controller: AddFollowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddFollowerController],
      providers: [
        AddFollowerService,
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

    controller = module.get<AddFollowerController>(AddFollowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
