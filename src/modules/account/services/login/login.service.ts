import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from '../../dtos/Login.dto';

@Injectable()
export class LoginService {
  constructor(
    private jwtService: JwtService,
    private readonly prisma: PrismaService,
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

  async validateUser({ email, password }: LoginDTO) {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email: email },
      });
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
