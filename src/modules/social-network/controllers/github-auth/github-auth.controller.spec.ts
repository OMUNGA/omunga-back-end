import { Test, TestingModule } from '@nestjs/testing';
import { GithubAuthController } from './github-auth.controller';

describe('LoginSocialNetworkController', () => {
  let controller: GithubAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubAuthController],
    }).compile();

    controller = module.get<GithubAuthController>(GithubAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
