import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { ProfileService } from './profile.service';
import { PrismaCreateUserRepository } from '../../repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../../../prisma/prisma.module';
import { CreateUsersRepository } from '../../repositories/createUserRepository';

describe('ProfileService', () => {
  let service: ProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileService,
        JwtService,
        {
          provide: CreateUsersRepository,
          useClass: PrismaCreateUserRepository,
        },
      ],
      imports: [PrismaModule],
    }).compile();

    service = module.get<ProfileService>(ProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
