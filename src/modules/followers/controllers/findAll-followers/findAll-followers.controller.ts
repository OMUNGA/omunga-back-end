import { Controller, Get } from '@nestjs/common';
import { FindAllFollowersService } from '../../services/findAll-followers/findAll-followers.service';

@Controller('followers')
export class FindallFollowersController {
  constructor(private findAllFollowers: FindAllFollowersService) {}

  @Get()
  async findAll() {
    return this.findAllFollowers.findAll();
  }
}
