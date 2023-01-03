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

@Module({
  controllers: [
    CreateUserController,
    FindAlllUsersController,
    FindOneController,
    DeleteUserController,
    UpdateUserController,
  ],
  providers: [
    CreateUserService,
    FindAllUserService,
    FindOneService,
    DeleteUserService,
    UpdateUserService,
  ],
  imports: [PrismaModule],
})
export class UsersModule {}
