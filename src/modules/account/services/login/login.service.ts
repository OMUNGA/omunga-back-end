import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { LoginDTO, LoginOutput } from '../../dtos/Login.dto';
import { messages } from '../../../../../shared/errorsMessages';
import * as bcrypt from 'bcrypt';
import { Users } from '../../entities/user';

@Injectable()
export class LoginService {
  constructor(
    private jwtService: JwtService,
    private readonly userRepository: CreateUsersRepository,
  ) {}

  async validateUser(data: LoginDTO): Promise<LoginOutput> {
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) {
      throw new UnauthorizedException(messages.Unauthorized);
    }

    const isPasswordValid = bcrypt.compareSync(data.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException(messages.Unauthorized);
    }

    const { token, expiresIn } = await this.generateJwtToken(user);

    return {
      user: user,
      token,
      expiresIn,
    };
  }

  private async generateJwtToken(
    user: Users,
  ): Promise<{ token: string; expiresIn: Date }> {
    const payload = { username: user.name, sub: user.id };
    const expirationTimeSeconds = 60 * 60 * 24 * 7; 
    const expirationDate = new Date(
      Date.now() + expirationTimeSeconds * 1000,
    );
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: expirationTimeSeconds,
    });

    return {
      token,
      expiresIn: expirationDate,
    };
  }
}
