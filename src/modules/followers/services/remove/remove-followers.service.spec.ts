import { Test, TestingModule } from '@nestjs/testing';
import { RemoveFollowerService } from './remove-followers.service';

describe('RemoveService', () => {
  let service: RemoveFollowerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoveFollowerService],
    }).compile();

    service = module.get<RemoveFollowerService>(RemoveFollowerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
