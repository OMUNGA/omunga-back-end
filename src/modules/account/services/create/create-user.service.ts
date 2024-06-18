import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUserDTO } from '../../dtos/Create-user.dto';
import { hashSync } from 'bcrypt';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { messages } from '../../../../../shared/errorsMessages';
import { EmailValidator } from 'src/utils/utils';

@Injectable()
export class CreateUserService {
  constructor(private userRepo: CreateUsersRepository) {}

  async create(createUserDTO: CreateUserDTO) {
    if (!EmailValidator(createUserDTO.email)) {
      throw new BadRequestException(messages.invalidEmail);
    }

    const userAlready = await this.userRepo.findByEmail(createUserDTO.email);

    if (userAlready) {
      throw new BadRequestException(messages.userAldreadyExists);
    }

    const userName = await this.userRepo.findByUsername(createUserDTO.username);

    if (userName) {
      throw new BadRequestException(messages.userNameAlreadyExists);
    }

    const passwordHas = hashSync(createUserDTO.password, 12);
    return this.userRepo.create({
      name: createUserDTO.name,
      username: createUserDTO.username,
      email: createUserDTO.email,
      password: passwordHas,
    });
  }
}
