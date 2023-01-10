import { Test, TestingModule } from '@nestjs/testing';
import { FindAllFollowersService } from './findAll-followers.service';

describe('ListallFollowersService', () => {
  let service: FindAllFollowersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllFollowersService],
    }).compile();

    service = module.get<FindAllFollowersService>(FindAllFollowersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
