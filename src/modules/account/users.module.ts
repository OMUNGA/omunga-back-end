import { Module } from '@nestjs/common';
import { CreateUserService } from './services/create/create-user.service';
import { CreateUserController } from './controllers/create/create-user.controller';
import { FindAllUserService } from './services/find-all-users/find-all-users.service';
import { FindAlllUsersController } from './controllers/find-all-users/find-all-users.controller';
import { FindOneService } from './services/find-one/find-one-user.service';
import { DeleteUserService } from './services/delete/delete-user.service';
import { UpdateUserService } from './services/update/update-user.service';
import { UpdateUserController } from './controllers/update/update-user.controller';
import { FindOneController } from './controllers/find-one/find-one-user.controller';
import { DeleteUserController } from './controllers/delete/delete-user.controller';
import { LoginController } from './controllers/login/login.controller';
import { LoginService } from './services/login/login.service';
import { LocalStrategy } from './services/jwt-strategy/local-jwt.strategy.service';
import { JwtStrategy } from './services/jwt-strategy/jwt.strategy.service';
import { JwtModule } from '@nestjs/jwt';
import { CreateUsersRepository } from './repositories/createUserRepository';
import { PrismaCreateUserRepository } from './repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProfileController } from './controllers/profile/profile.controller';
import { ProfileService } from './services/profile/profile.service';

@Module({
  controllers: [
    CreateUserController,
    FindAlllUsersController,
    FindOneController,
    DeleteUserController,
    UpdateUserController,
    LoginController,
    ProfileController,
  ],
  providers: [
    CreateUserService,
    FindAllUserService,
    FindOneService,
    DeleteUserService,
    UpdateUserService,
    ProfileService,
    LoginService,
    LocalStrategy,
    JwtStrategy,

    {
      provide: CreateUsersRepository,
      useClass: PrismaCreateUserRepository,
    },
  ],
  imports: [
    PrismaModule,
    JwtModule.register({
      signOptions: {
        expiresIn: '30d',
      },
    }),
  ],
})
export class UsersModule {}
