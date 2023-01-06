import { Module } from '@nestjs/common';
import { LoginSocialNetworkService } from './services/login-social-network/login-social-network.service';
import { LoginSocialNetworkController } from './controllers/login-social-network/login-social-network.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GoogleStrategy } from './Strategy/google.strategy.service';

@Module({
  providers: [LoginSocialNetworkService, GoogleStrategy],
  controllers: [LoginSocialNetworkController],
  imports: [PrismaModule],
})
export class SocialNetworkModule {}
