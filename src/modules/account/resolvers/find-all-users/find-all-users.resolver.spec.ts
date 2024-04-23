import { Test, TestingModule } from '@nestjs/testing';
import { FindAlllUsersController } from './find-all-users.controller';
import { FindAllUserService } from '../../services/find-all-users/find-all-users.service';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('ListAllUsersController', () => {
  let controller: FindAlllUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAlllUsersController],
      providers: [
        FindAllUserService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<FindAlllUsersController>(FindAlllUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
