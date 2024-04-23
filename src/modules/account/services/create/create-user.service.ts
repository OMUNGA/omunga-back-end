import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../../dtos/Create-user.dto';
import { hashSync } from 'bcrypt';
import { CreateUsersRepository } from '../../repositories/createUserRepository';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class CreateUserService {
  constructor(private userRepo: CreateUsersRepository) {}

  async create(createUserDTO: CreateUserDTO) {
      const userAlready = await this.userRepo.findByEmail(createUserDTO.email);

      if (userAlready) {
        throw new BadRequestException("Ups, usuário já existe")
      }

      const passwordHas = hashSync(createUserDTO.password, 12);
      return this.userRepo.create({
        name:  createUserDTO.name,
        username: createUserDTO.username,
        email: createUserDTO.email,
        bio: createUserDTO.bio,
        phone: createUserDTO.phone,
        password: passwordHas,
      });
  
  }
}
