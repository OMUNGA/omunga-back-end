import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUsersRepository } from '../../repositories/createUserRepository';

@Injectable()
export class LoginService {
  constructor(
    private jwtService: JwtService,
    private readonly userRepository: CreateUsersRepository,
  ) {}

  async login(user) {
    const payload = { sub: user.id, email: user.email };
    return {
      token: this.jwtService.sign(payload, {
        secret: process.env.JWT_KEY,
        expiresIn: '3d',
      }),
    };
  }

  async validateUser(email: string, password: string) {
    try {
      const user = await this.userRepository.findByEmail(email);

      if (!user) {
        throw new UnauthorizedException('Email ou palavra passe errada!');
      }
      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) return null;

      return user;
    } catch (error) {
      throw error;
    }
  }
}
