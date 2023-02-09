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
import { Me } from '../../../../modules/account/guards/current-user.guard';
import { AuthUserGuard } from 'src/modules/account/guards/auth.guard';

@Controller('follower')
export class AddFollowerController {
  constructor(private readonly addFollowerService: AddFollowerService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(AuthUserGuard)
  async followUser(@Body() followerDTO: AddFollowerDTO, @Me() user: any) {
    console.log('vindo do logado', user.sub.sub);
    followerDTO.userId = user.sub.sub;
    return await this.addFollowerService.followUser(followerDTO);
  }
}
