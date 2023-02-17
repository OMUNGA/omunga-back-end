import { Controller, Get, UseGuards } from '@nestjs/common';
import { FindAllUserService } from '../../services/find-all-users/find-all-users.service';
import { AuthUserGuard } from '../../guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller('users')
export class FindAlllUsersController {
  constructor(private readonly findAllService: FindAllUserService) {}

  @Get()
  async findAll() {
    return this.findAllService.findAll();
  }
}
