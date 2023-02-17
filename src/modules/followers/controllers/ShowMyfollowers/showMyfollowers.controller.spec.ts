import { Test, TestingModule } from '@nestjs/testing';
import { ShowMyFollowerController } from './showMyfollowers.controller';
import { ShowMyFollowersService } from '../../services/ShowMyfollowers/showMyfollowers.service';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { PrismaFollowersRepository } from '../../repositories/implementations/PrismaFollowersRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('ListallFollowersController', () => {
  let controller: ShowMyFollowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowMyFollowerController],
      providers: [
        ShowMyFollowersService,
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

    controller = module.get<ShowMyFollowerController>(ShowMyFollowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
