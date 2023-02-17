import { Test, TestingModule } from '@nestjs/testing';
import { DeleteUserController } from './delete-user.controller';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { DeleteUserService } from '../../services/delete/delete-user.service';

describe('DeleteController', () => {
  let controller: DeleteUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteUserService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      controllers: [DeleteUserController],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<DeleteUserController>(DeleteUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
