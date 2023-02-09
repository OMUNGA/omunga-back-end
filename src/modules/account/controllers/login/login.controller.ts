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
import { ApiProperty } from '@nestjs/swagger';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @UsePipes(ValidationPipe)
  @ApiProperty()
  @HttpCode(HttpStatus.CREATED)
  async handle(@Req() req: any) {
    return await this.loginService.login(req.user);
  }
}
