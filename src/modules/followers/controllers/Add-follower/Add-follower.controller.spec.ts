import { Test, TestingModule } from '@nestjs/testing';
import { AddFollowerController } from './Add-follower.controller';

describe('CreateFollowersController', () => {
  let controller: AddFollowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddFollowerController],
    }).compile();

    controller = module.get<AddFollowerController>(AddFollowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
