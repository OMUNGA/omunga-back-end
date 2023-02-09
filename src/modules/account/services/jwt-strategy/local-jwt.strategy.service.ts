import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginService } from '../login/login.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private loginService: LoginService) {
    super({
      usernameField: 'email',
    });
  }

  public async validate(email: string, password: string) {
    try {
      const user = await this.loginService.validateUser({
        email: email,
        password: password,
      });

      if (!user)
        throw new UnauthorizedException('Email ou palavra passe errada!');
      return user;
    } catch (error) {
      throw error;
    }
  }
}
