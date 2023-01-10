import { Module } from '@nestjs/common';
import { CreateFollowersService } from './services/create-followers/create-followers.service';
import { CreateFollowersController } from './controllers/create-followers/create-followers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { FindallFollowersController } from './controllers/findAll-followers/findAll-followers.controller';
import { FindAllFollowersService } from './services/findAll-followers/findAll-followers.service';
import { RemoveFollowerService } from './services/remove/remove-followers.service';
import { RemoveFollowersController } from './controllers/remove/remove-followers.controller';
import { UpdateFollowersService } from './services/update/update-followers.service';
import { UpdateFollowersController } from './controllers/update/update.controller';

@Module({
  providers: [
    CreateFollowersService,
    FindAllFollowersService,
    RemoveFollowerService,
    UpdateFollowersService,
  ],
  controllers: [
    CreateFollowersController,
    FindallFollowersController,
    RemoveFollowersController,
    UpdateFollowersController,
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
export class FollowersModule {}
