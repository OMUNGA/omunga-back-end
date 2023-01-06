import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class LoginSocialNetworkController {
  @Get('google/login')
  async handle() {
    return { msg: 'Google auth' };
  }
}
