import { Test, TestingModule } from '@nestjs/testing';
import { FacebookAuthService } from './facebook-auth.service';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';

describe('LoginSocialNetworkService', () => {
  let service: FacebookAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FacebookAuthService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<FacebookAuthService>(FacebookAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
