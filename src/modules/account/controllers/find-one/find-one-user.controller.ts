import { Controller, Get, Param } from '@nestjs/common';
import { FindOneService } from '../../services/find-one/find-one-user.service';

@Controller('api/v1/user')
export class FindOneController {
  constructor(private findOneUserService: FindOneService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.findOneUserService.findOne(id);
  }
}
