import { Test, TestingModule } from '@nestjs/testing';
import { FacebookAuthController } from './facebook-auth.controller';
import { FacebookAuthService } from '../../services/facebook-auth /facebook-auth.service';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('LoginSocialNetworkController', () => {
  let controller: FacebookAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacebookAuthController],
      providers: [
        FacebookAuthService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<FacebookAuthController>(FacebookAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
