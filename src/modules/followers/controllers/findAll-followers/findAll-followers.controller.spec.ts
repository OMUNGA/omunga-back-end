import { Test, TestingModule } from '@nestjs/testing';
import { FindallFollowersController } from './findAll-followers.controller';

describe('ListallFollowersController', () => {
  let controller: FindallFollowersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindallFollowersController],
    }).compile();

    controller = module.get<FindallFollowersController>(
      FindallFollowersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
