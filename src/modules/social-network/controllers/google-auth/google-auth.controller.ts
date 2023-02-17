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
import { GoogleAuthService } from '../../services/google-auth/google-auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class GoogleAuthController {
  constructor(private googleLoginService: GoogleAuthService) {}
  @Get('google/login')
  @UseGuards(GoogleAuthGuard, AuthGuard('local'))
  async googleLogin() {
    return HttpStatus.OK;
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  async redirect(@Req() req: Request): Promise<any> {
    return this.googleLoginService.googleLogin(req);
  }
}
