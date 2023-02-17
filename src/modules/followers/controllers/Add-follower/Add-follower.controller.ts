import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddFollowerService } from '../../services/Add-follower/Add-follower.service';
import { AddFollowerDTO } from '../../dtos/add-followers.dto';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { Me } from '../../../../modules/account/decorator/current-user.guard';

@Controller('follower')
export class AddFollowerController {
  constructor(private readonly addFollowerService: AddFollowerService) {}

  @UseGuards(AuthUserGuard)
  @Post()
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async followUser(@Body() data: AddFollowerDTO, @Me() req: any) {
    const userId = req.sub.sub;
    await this.addFollowerService.followUser(userId, data);
  }
}
