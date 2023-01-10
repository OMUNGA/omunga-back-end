import { Test, TestingModule } from '@nestjs/testing';
import { CreateFollowersService } from './create-followers.service';

describe('CreateFollowersService', () => {
  let service: CreateFollowersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFollowersService],
    }).compile();

    service = module.get<CreateFollowersService>(CreateFollowersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
