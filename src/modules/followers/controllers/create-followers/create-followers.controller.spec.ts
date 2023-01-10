import { Test, TestingModule } from '@nestjs/testing';
import { CreateFollowersController } from './create-followers.controller';

describe('CreateFollowersController', () => {
  let controller: CreateFollowersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateFollowersController],
    }).compile();

    controller = module.get<CreateFollowersController>(
      CreateFollowersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
