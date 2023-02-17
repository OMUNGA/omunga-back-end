import { Controller, Get, UseGuards } from '@nestjs/common';
import { ShowMyFollowersService } from '../../services/ShowMyfollowers/showMyfollowers.service';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { Me } from '../../../../modules/account/decorator/current-user.guard';

@UseGuards(AuthUserGuard)
@Controller('followers')
export class ShowMyFollowerController {
  constructor(private followerService: ShowMyFollowersService) {}

  @Get()
  async ShowMyFollower(userId: string, @Me() user: any) {
    userId = user.sub.sub;
    return this.followerService.ShowMyFollower(userId);
  }
}
