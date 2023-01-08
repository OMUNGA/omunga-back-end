import { Test, TestingModule } from '@nestjs/testing';
import { LoginSocialNetworkController } from './login-social-network.controller';

describe('LoginSocialNetworkController', () => {
  let controller: LoginSocialNetworkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginSocialNetworkController],
    }).compile();

    controller = module.get<LoginSocialNetworkController>(
      LoginSocialNetworkController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
