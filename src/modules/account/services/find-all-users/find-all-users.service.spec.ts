import { Test, TestingModule } from '@nestjs/testing';
import { FindAllUserService } from './find-all-users.service';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('ListAllUsersService', () => {
  let service: FindAllUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllUserService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<FindAllUserService>(FindAllUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
