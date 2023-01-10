import {
  Controller,
  Get,
  HttpStatus,
  Redirect,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { GithubAuthService } from '../../services/github-auth/github-auth.service';
import { GithubAuthGuard } from '../../Guard/github-auth.guard';

@Controller('auth')
export class GithubAuthController {
  constructor(private githubloginService: GithubAuthService) {}
  @Get('github/login')
  @UseGuards(GithubAuthGuard)
  async githubleLogin() {
    return HttpStatus.OK;
  }

  @Get('github/redirect')
  @UseGuards(GithubAuthGuard)
  async redirect(@Req() req: Request): Promise<any> {
    return this.githubloginService.githubLogin(req);
  }
}
