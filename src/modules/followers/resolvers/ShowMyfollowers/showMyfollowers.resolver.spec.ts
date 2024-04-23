import { Test, TestingModule } from '@nestjs/testing';
import { PrismaCreateUserRepository } from '../../../account/repositories/implementations/PrismaCreateUserRepository';
import { CreateUsersRepository } from '../../../account/repositories/createUserRepository';
import { FollowersRepository } from '../../repositories/followersRepositories';
import { PrismaFollowersRepository } from '../../repositories/implementations/PrismaFollowersRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { GetFollowersResolver } from './getfollowers.resolver';
import { GetFollowersService } from '../../services/ShowMyfollowers/getfollowers.service';

describe('GetFollowersResolver', () => {
  let controller: GetFollowersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetFollowersResolver],
      providers: [
        GetFollowersService,
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

    controller = module.get<GetFollowersResolver>(GetFollowersResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
