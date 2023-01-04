import { Test, TestingModule } from '@nestjs/testing';
import { UpdateUserService } from './update-user.service';

describe('UpdateService', () => {
  let service: UpdateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateUserService],
    }).compile();

    service = module.get<UpdateUserService>(UpdateUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
