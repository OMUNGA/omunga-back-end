import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from '../../services/login/login.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { LoginResolver } from './login.resolver';
import { JwtStrategy } from '../../services/jwt-strategy/jwt.strategy.service';

describe('LoginResolver', () => {
  let controller: LoginResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginResolver],
      providers: [
        LoginService,
        JwtService,
        JwtStrategy,
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
