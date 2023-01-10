import { Module } from '@nestjs/common';
import { CreateFollowersService } from './services/create-followers/create-followers.service';
import { CreateFollowersController } from './controllers/create-followers/create-followers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { FindallFollowersController } from './controllers/findAll-followers/findAll-followers.controller';
import { FindAllFollowersService } from './services/findAll-followers/findAll-followers.service';

@Module({
  providers: [CreateFollowersService, FindAllFollowersService],
  controllers: [CreateFollowersController, FindallFollowersController],
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
export class FollowersModule {}
