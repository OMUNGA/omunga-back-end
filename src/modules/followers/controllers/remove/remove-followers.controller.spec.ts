import { Test, TestingModule } from '@nestjs/testing';
import { RemoveFollowersController } from './remove-followers.controller';

describe('RemoveController', () => {
  let controller: RemoveFollowersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemoveFollowersController],
    }).compile();

    controller = module.get<RemoveFollowersController>(
      RemoveFollowersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
