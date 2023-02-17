import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../../dtos/Create-user.dto';
import { hashSync } from 'bcrypt';
import { CreateUsersRepository } from '../../repositories/createUserRepository';

@Injectable()
export class CreateUserService {
  constructor(private userRepo: CreateUsersRepository) {}

  async create(createUserDTO: CreateUserDTO) {
    try {
      const userAlready = await this.userRepo.findByEmail(createUserDTO.email);

      if (userAlready) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Usuário já existe',
          },
          HttpStatus.BAD_REQUEST,
        );
      }

      const passwordHas = hashSync(createUserDTO.password, 12);
      return this.userRepo.create({
        first_name: createUserDTO.first_name,
        last_name: createUserDTO.last_name,
        email: createUserDTO.email,
        bio: createUserDTO.bio,
        phone: createUserDTO.phone,
        password: passwordHas,
        photo: createUserDTO.password,
      });
    } catch (error) {
      throw error;
    }
  }
}
