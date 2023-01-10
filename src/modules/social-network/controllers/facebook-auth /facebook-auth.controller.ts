import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { FacebookAuthService } from '../../services/facebook-auth /facebook-auth.service';
import { FacebookAuthGuard } from '../../Guard/facebook-auth.guard';

@Controller('auth')
export class FacebookAuthController {
  constructor(private facebookloginService: FacebookAuthService) {}
  @Get('facebook/login')
  @UseGuards(FacebookAuthGuard)
  async facebookLogin() {
    return HttpStatus.OK;
  }

  @Get('facebook/redirect')
  @UseGuards(FacebookAuthGuard)
  async redirect(@Req() req: Request): Promise<any> {
    return this.facebookloginService.facebookLogin(req);
  }
}
