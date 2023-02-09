import { Injectable } from '@nestjs/common';
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

  async validateUser(data: LoginDTO) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    const isPasswordValid = bcrypt.compareSync(data.password, user.password);

    if (!isPasswordValid) return null;

    return user;
  }
}
