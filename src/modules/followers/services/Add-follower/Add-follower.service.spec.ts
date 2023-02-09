import { Test, TestingModule } from '@nestjs/testing';
import { AddFollowerService } from './Add-follower.service';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('CreateFollowersService', () => {
  let service: AddFollowerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddFollowerService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<AddFollowerService>(AddFollowerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
