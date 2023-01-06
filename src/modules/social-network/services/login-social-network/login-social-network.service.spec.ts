import { Test, TestingModule } from '@nestjs/testing';
import { LoginSocialNetworkService } from './login-social-network.service';

describe('LoginSocialNetworkService', () => {
  let service: LoginSocialNetworkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginSocialNetworkService],
    }).compile();

    service = module.get<LoginSocialNetworkService>(LoginSocialNetworkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
