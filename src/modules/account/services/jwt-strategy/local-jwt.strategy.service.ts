import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { Users } from '../../entities/user';
import { messages } from 'shared/errorsMessages';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepo: CreateUsersRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_KEY,
    });
  }

  async validate(payload: { sub: Users['id']; name: string }) {
    const user = await this.userRepo.findById(payload.sub);

    if (!user) {
      throw new UnauthorizedException(messages.Unauthenticated);
    }

    return user;
  }
}