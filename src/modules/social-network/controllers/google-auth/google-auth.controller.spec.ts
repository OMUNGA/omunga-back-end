import { Test, TestingModule } from '@nestjs/testing';
import { GoogleAuthController } from './google-auth.controller';
import { GoogleAuthService } from '../../services/google-auth/google-auth.service';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('LoginSocialNetworkController', () => {
  let controller: GoogleAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleAuthController],
      providers: [
        GoogleAuthService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<GoogleAuthController>(GoogleAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
