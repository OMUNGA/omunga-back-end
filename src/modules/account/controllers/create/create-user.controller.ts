import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from '../../dtos/Create-user.dto';
import { CreateUserService } from '../../services/create/create-user.service';

const baseURL = process.env.BASE_PATH;

@Controller(`${baseURL}/user`)
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.createUserService.create(createUserDTO);
  }
}
