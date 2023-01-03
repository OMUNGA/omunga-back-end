import { Test, TestingModule } from '@nestjs/testing';
import { DeleteUserService } from './delete.service';

describe('DeleteService', () => {
  let service: DeleteUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteUserService],
    }).compile();

    service = module.get<DeleteUserService>(DeleteUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
