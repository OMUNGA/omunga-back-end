import { Module } from '@nestjs/common';
import { LoginSocialNetworkService } from './services/login-social-network/login-social-network.service';
import { LoginSocialNetworkController } from './controllers/login-social-network/login-social-network.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GoogleStrategy } from './Strategy/google.strategy.service';
import { LoginService } from '../account/services/login/login.service';
import { JwtStrategy } from '../account/services/jwt-strategy/jwt.strategy.service';
import { JwtModule } from '@nestjs/jwt';
import { SessionSerializer } from './utils/Serializer';

@Module({
  providers: [
    LoginSocialNetworkService,
    GoogleStrategy,
    LoginService,
    JwtStrategy,
    SessionSerializer,
  ],
  controllers: [LoginSocialNetworkController],
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
export class SocialNetworkModule {}
