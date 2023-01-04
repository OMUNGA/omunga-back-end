import { Test, TestingModule } from '@nestjs/testing';
import { DeleteUserController } from './delete-user.controller';

describe('DeleteController', () => {
  let controller: DeleteUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeleteUserController],
    }).compile();

    controller = module.get<DeleteUserController>(DeleteUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
