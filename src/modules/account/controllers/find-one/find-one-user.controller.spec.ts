import { Test, TestingModule } from '@nestjs/testing';
import { FindOneController } from './find-one.controller';

describe('FindOneController', () => {
  let controller: FindOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOneController],
    }).compile();

    controller = module.get<FindOneController>(FindOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
