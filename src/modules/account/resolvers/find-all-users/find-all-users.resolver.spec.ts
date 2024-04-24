import { Test, TestingModule } from '@nestjs/testing';
import { FindAllUserService } from '../../services/find-all-users/find-all-users.service';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { FindAlllUsersResolver } from './find-all-users.resolver';

describe('FindAlllUsersResolver', () => {
  let controller: FindAlllUsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAlllUsersResolver],
      providers: [
        FindAllUserService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<FindAlllUsersResolver>(FindAlllUsersResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
