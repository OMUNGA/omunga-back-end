import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { UnFollowerService } from '../../services/unFollower/Unfollower.service';
import { Me } from '../../../../modules/account/decorator/current-user.guard';

@UseGuards(AuthUserGuard)
@Controller('unfollower')
export class UnfollowUserController {
  constructor(private readonly unFollowerService: UnFollowerService) {}

  @Delete(':id')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async unfollowUser(
    @Body() userId: string,
    @Param('id') userIdToUnfollow: string,
    @Me() user: any,
  ): Promise<void> {
    userId = user.sub.sub;
    return this.unFollowerService.unFollower(userId, userIdToUnfollow);
  }
}
