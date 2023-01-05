import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginService } from '../../services/login/login.service';

const baseURL = process.env.BASE_PATH;

@Controller(`${baseURL}/auth`)
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async handle(@Req() req: any) {
    return await this.loginService.login(req.user);
  }
}
