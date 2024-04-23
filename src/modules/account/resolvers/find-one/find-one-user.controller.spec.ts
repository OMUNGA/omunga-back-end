import { Test, TestingModule } from '@nestjs/testing';
import { FindOneService } from '../../services/find-one/find-one-user.service';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { FindOneController } from './find-one-user.controller';

describe('FindOneController', () => {
  let controller: FindOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneController],
      providers: [
        FindOneService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<FindOneController>(FindOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
