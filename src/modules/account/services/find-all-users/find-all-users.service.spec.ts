import { Test, TestingModule } from '@nestjs/testing';
import { FindAllUserService } from './find-all-users.service';

describe('ListAllUsersService', () => {
  let service: FindAllUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllUserService],
    }).compile();

    service = module.get<FindAllUserService>(FindAllUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
