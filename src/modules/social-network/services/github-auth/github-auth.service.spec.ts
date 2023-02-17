import { Test, TestingModule } from '@nestjs/testing';
import { GithubAuthService } from './github-auth.service';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { PrismaCreateUserRepository } from '../../../../modules/account/repositories/implementations/PrismaCreateUserRepository';

describe('LoginSocialNetworkService', () => {
  let service: GithubAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GithubAuthService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<GithubAuthService>(GithubAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
