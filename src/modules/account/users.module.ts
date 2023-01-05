import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
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

@Module({
  controllers: [
    CreateUserController,
    FindAlllUsersController,
    FindOneController,
    DeleteUserController,
    UpdateUserController,
    LoginController,
  ],
  providers: [
    CreateUserService,
    FindAllUserService,
    FindOneService,
    DeleteUserService,
    UpdateUserService,
    LoginService,
    LocalStrategy,
    JwtStrategy,
  ],
  imports: [
    PrismaModule,
    JwtModule.register({
      privateKey: process.env.JWT_KEY,
      secretOrPrivateKey: process.env.JWT_KEY,
      signOptions: {
        expiresIn: '2d',
      },
    }),
  ],
})
export class UsersModule {}
