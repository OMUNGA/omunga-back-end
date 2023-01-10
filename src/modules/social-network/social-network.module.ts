import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GoogleStrategy } from './Strategy/google.strategy.service';
import { LoginService } from '../account/services/login/login.service';
import { JwtStrategy } from '../account/services/jwt-strategy/jwt.strategy.service';
import { JwtModule } from '@nestjs/jwt';
import { SessionSerializer } from './utils/Serializer';
import { GoogleAuthController } from './controllers/google-auth/google-auth.controller';
import { GoogleAuthService } from './services/google-auth/google-auth.service';
import { GithubStrategy } from './Strategy/github.strategy.service';
import { GithubAuthService } from './services/github-auth/github-auth.service';
import { GithubAuthController } from './controllers/github-auth/github-auth.controller';
import { FacebookStrategy } from './Strategy/facebook.strategy.service';
import { FacebookAuthController } from './controllers/facebook-auth /facebook-auth.controller';
import { FacebookAuthService } from './services/facebook-auth /facebook-auth.service';

@Module({
  providers: [
    GoogleAuthService,
    GoogleStrategy,
    GithubStrategy,
    LoginService,
    JwtStrategy,
    SessionSerializer,
    GithubAuthService,
    FacebookStrategy,
    FacebookAuthService,
  ],
  controllers: [
    GoogleAuthController,
    GithubAuthController,
    FacebookAuthController,
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
export class SocialNetworkModule {}
