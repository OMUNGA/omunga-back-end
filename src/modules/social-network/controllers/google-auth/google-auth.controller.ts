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

@Controller('auth')
export class GoogleAuthController {
  constructor(private googleLoginService: GoogleAuthService) {}
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
}
