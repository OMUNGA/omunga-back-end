import { Test, TestingModule } from '@nestjs/testing';
import { UpdateFollowersController } from './update.controller';

describe('UpdateController', () => {
  let controller: UpdateFollowersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateFollowersController],
    }).compile();

    controller = module.get<UpdateFollowersController>(
      UpdateFollowersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
