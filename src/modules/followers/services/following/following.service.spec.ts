import { Test, TestingModule } from '@nestjs/testing';
import { FollowingService } from './following.service';

describe('FollowingService', () => {
  let service: FollowingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FollowingService],
    }).compile();

    service = module.get<FollowingService>(FollowingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
