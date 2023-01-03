import { Test, TestingModule } from '@nestjs/testing';
import { FindOneService } from './find-one.service';

describe('FindOneService', () => {
  let service: FindOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOneService],
    }).compile();

    service = module.get<FindOneService>(FindOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
