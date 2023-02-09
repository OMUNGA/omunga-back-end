import { Test, TestingModule } from '@nestjs/testing';
import { UpdateFollowersService } from './update-followers.service';

describe('UpdateService', () => {
  let service: UpdateFollowersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateFollowersService],
    }).compile();

    service = module.get<UpdateFollowersService>(UpdateFollowersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
