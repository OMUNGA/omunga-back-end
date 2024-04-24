import { Test, TestingModule } from '@nestjs/testing';
import { UpdateUserService } from '../../services/update/update-user.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { UpdateUserResolver } from './update-user.resolver';

describe('UpdateUserResolver', () => {
  let controller: UpdateUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateUserResolver],
      providers: [
        UpdateUserService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<UpdateUserResolver>(UpdateUserResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
