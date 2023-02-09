import { Test, TestingModule } from '@nestjs/testing';
import { FollowersController } from './followers.controller';

describe('ListallFollowersController', () => {
  let controller: FollowersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowersController],
    }).compile();

    controller = module.get<FollowersController>(FollowersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
