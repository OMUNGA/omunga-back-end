import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProfileDTO } from '../../dtos/profile.dto';
import { ProfileService } from '../../services/profile/profile.service';
import { AuthUserGuard } from '../../guards/auth.guard';
import { Me } from '../../decorator/current-user.guard';

@Controller('user')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthUserGuard)
  @Get('profile/:id')
  async getProfile(
    @Param('id') userId: string,
    @Me() req: any,
  ): Promise<ProfileDTO> {
    userId = req.sub.sub;
    return this.profileService.profile(userId);
  }
}
