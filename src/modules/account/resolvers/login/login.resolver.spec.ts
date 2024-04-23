import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from '../../services/login/login.service';
import { JwtService } from '@nestjs/jwt';
import { LocalStrategy } from '../../services/jwt-strategy/local-jwt.strategy.service';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { LoginResolver } from './login.resolver';

describe('LoginResolver', () => {
  let controller: LoginResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginResolver],
      providers: [
        LoginService,
        JwtService,
        LocalStrategy,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<LoginResolver>(LoginResolver);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
