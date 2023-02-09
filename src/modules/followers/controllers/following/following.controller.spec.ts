import { Test, TestingModule } from '@nestjs/testing';
import { FollowingController } from './following.controller';

describe('FollowingController', () => {
  let controller: FollowingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowingController],
    }).compile();

    controller = module.get<FollowingController>(FollowingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
