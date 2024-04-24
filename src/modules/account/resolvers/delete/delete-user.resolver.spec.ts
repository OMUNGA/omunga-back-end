import { Test, TestingModule } from '@nestjs/testing';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { DeleteUserService } from '../../services/delete/delete-user.service';
import { DeleteUserResolver } from './delete-user.resolver';

describe('DeleteUserResolver', () => {
  let controller: DeleteUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteUserService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      controllers: [DeleteUserResolver],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<DeleteUserResolver>(DeleteUserResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
