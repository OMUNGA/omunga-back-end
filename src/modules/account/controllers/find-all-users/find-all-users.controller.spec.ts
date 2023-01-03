import { Test, TestingModule } from '@nestjs/testing';
import { FindAlllUsersController } from './find-all-users.controller';

describe('ListAllUsersController', () => {
  let controller: FindAlllUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindAlllUsersController],
    }).compile();

    controller = module.get<FindAlllUsersController>(FindAlllUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
