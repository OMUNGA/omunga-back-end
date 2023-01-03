import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateUserService } from './services/create/create-user.service';
import { CreateUserController } from './controllers/create/create-user.controller';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUserService],
  imports: [PrismaModule],
})
export class UsersModule {}
