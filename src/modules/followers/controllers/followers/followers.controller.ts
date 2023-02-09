import { Controller, Get } from '@nestjs/common';
import { FollowersService } from '../../services/followers/followers.service';

@Controller('followers')
export class FollowersController {
  constructor(private findAllFollowers: FollowersService) {}

  @Get()
  async findAll() {
    return this.findAllFollowers.findAll();
  }
}
