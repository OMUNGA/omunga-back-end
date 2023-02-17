import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindOneService } from '../../services/find-one/find-one-user.service';
import { AuthUserGuard } from '../../guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller(`user`)
export class FindOneController {
  constructor(private findOneUserService: FindOneService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.findOneUserService.findOne(id);
  }
}
