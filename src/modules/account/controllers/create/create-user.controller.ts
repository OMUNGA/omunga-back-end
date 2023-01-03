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

@Controller('api/v1/user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.createUserService.create(createUserDTO);
  }
}
