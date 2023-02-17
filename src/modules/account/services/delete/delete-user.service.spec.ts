import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { DeleteUserService } from './delete-user.service';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';

describe('DeleteService', () => {
  let service: DeleteUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteUserService,

        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],

      imports: [PrismaModule],
    }).compile();

    service = module.get<DeleteUserService>(DeleteUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
