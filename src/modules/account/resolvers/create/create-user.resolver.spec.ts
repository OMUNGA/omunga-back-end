import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateUserService } from '../../services/create/create-user.service';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { CreateUserResolver } from './create-user.resolver';

describe('CreateUserResolver', () => {
  let controller: CreateUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateUserResolver],
      providers: [
        CreateUserService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<CreateUserResolver>(CreateUserResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
