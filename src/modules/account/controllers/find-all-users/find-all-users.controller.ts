import { Controller, Get } from '@nestjs/common';
import { FindAllUserService } from '../../services/find-all-users/find-all-users.service';

const baseURL = process.env.BASE_PATH;
@Controller(`${baseURL}/users`)
export class FindAlllUsersController {
  constructor(private readonly findAllService: FindAllUserService) {}

  @Get()
  async findAll() {
    return this.findAllService.findAll();
  }
}
