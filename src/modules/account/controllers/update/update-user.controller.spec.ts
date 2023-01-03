import { Test, TestingModule } from '@nestjs/testing';
import { UpdateUserController } from './update-user.controller';

describe('UpdateController', () => {
  let controller: UpdateUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateUserController],
    }).compile();

    controller = module.get<UpdateUserController>(UpdateUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
