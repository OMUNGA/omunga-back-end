import { Test, TestingModule } from '@nestjs/testing';
import { FindOneService } from './find-one-user.service';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('FindOneService', () => {
  let service: FindOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindOneService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<FindOneService>(FindOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
