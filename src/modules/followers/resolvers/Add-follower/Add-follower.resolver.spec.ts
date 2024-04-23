import { Test, TestingModule } from '@nestjs/testing';
import { AddFollowerService } from '../../services/Add-follower/Add-follower.service';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { PrismaFollowersRepository } from '../../repositories/implementations/PrismaFollowersRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { AddFollowerResolver } from './Add-follower.resolver';

describe('CreateFollowersController', () => {
  let controller: AddFollowerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddFollowerResolver],
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

    controller = module.get<AddFollowerResolver>(AddFollowerResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
