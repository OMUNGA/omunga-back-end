import { Controller, Get, Param } from '@nestjs/common';
import { FollowingService } from '../../services/following/following.service';

@Controller('following')
export class FollowingController {
  constructor(private readonly followingSerice: FollowingService) {}

  @Get(':id')
  following(@Param('id') id: string) {
    return this.followingSerice.ShowAllUserfollowing(id);
  }
}
