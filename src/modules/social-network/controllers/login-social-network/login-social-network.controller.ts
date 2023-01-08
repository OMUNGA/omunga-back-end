import {
  Controller,
  Get,
  HttpStatus,
  Redirect,
  Req,
  UseGuards,
} from '@nestjs/common';
import { GoogleAuthGuard } from '../../Guard/google-auth.guard';
import { Request } from 'express';
import { LoginSocialNetworkService } from '../../services/login-social-network/login-social-network.service';

@Controller('auth')
export class LoginSocialNetworkController {
  constructor(private googleLoginService: LoginSocialNetworkService) {}
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  async googleLogin() {
    return HttpStatus.OK;
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  async redirect(@Req() req: Request): Promise<any> {
    return this.googleLoginService.googleLogin(req);
  }

  @Get('status')
  user(@Req() request: Request) {
    if (request.user) {
      return { msg: 'logado' };
    } else {
      return { msg: 'Not logado' };
    }
  }
}
