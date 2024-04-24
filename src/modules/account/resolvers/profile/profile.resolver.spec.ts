import { Test, TestingModule } from '@nestjs/testing';
import { ProfileService } from '../../services/profile/profile.service';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { ProfileUserResolver } from './profile.resolver';

describe('ProfileUserResolver', () => {
  let controller: ProfileUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileUserResolver],
      providers: [
        ProfileService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<ProfileUserResolver>(ProfileUserResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
