import { Module } from '@nestjs/common';
import { CreateUserService } from './services/create/create-user.service';

import { FindAllUserService } from './services/find-all-users/find-all-users.service';
import { FindOneService } from './services/find-one/find-one-user.service';
import { DeleteUserService } from './services/delete/delete-user.service';
import { UpdateUserService } from './services/update/update-user.service';
import { LoginService } from './services/login/login.service';
import { JwtStrategy } from './services/jwt-strategy/jwt.strategy.service';
import { JwtModule } from '@nestjs/jwt';
import { CreateUsersRepository } from './repositories/createUserRepository';
import { PrismaCreateUserRepository } from './repositories/implementations/PrismaCreateUserRepository';
import { PrismaModule } from '../../prisma/prisma.module';
import { ProfileService } from './services/profile/profile.service';
import { CreateUserResolver } from './resolvers/create/create-user.resolver';
import { FindAlllUsersResolver } from './resolvers/find-all-users/find-all-users.resolver';
import { DeleteUserResolver } from './resolvers/delete/delete-user.resolver';
import { FindOneUserResolver } from './resolvers/find-one/find-one-user.resolver';
import { LoginResolver } from './resolvers/login/login.resolver';
import { ProfileUserResolver } from './resolvers/profile/profile.resolver';
import { UpdateUserResolver } from './resolvers/update/update-user.resolver';


@Module({
  controllers: [],
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '7d',
      },
    })
  ],
  providers: [
    CreateUserService,
    FindAllUserService,
    FindOneService,
    DeleteUserService,
    UpdateUserService,
    ProfileService,
    LoginService,
    JwtStrategy,

    //  Resolver

    LoginResolver,
    CreateUserResolver,
    ProfileUserResolver,
    FindAlllUsersResolver,
    FindOneUserResolver,
    DeleteUserResolver,
    UpdateUserResolver,

    {
      provide: CreateUsersRepository,
      useClass: PrismaCreateUserRepository,
    },
  ],
 
})
export class UsersModule {}
