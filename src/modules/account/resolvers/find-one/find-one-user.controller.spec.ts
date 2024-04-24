import { Test, TestingModule } from '@nestjs/testing';
import { FindOneService } from '../../services/find-one/find-one-user.service';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { FindOneUserResolver } from './find-one-user.resolver';

describe('FindOneUserResolver', () => {
  let controller: FindOneUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneUserResolver],
      providers: [
        FindOneService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<FindOneUserResolver>(FindOneUserResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
