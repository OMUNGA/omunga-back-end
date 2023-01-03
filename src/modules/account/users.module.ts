import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateUserController } from './controllers/create/create-user-controller.controller';
import { CreateUserService } from './services/create/create-user.service';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUserService],
  imports: [PrismaModule],
})
export class UsersModule {}
