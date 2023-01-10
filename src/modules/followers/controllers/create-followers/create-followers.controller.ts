import { AddFollowersDTO } from '../../dtos/add-follower.dto';
import { CreateFollowersService } from '../../services/create-followers/create-followers.service';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('follower')
export class CreateFollowersController {
  constructor(private readonly followerService: CreateFollowersService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() followrs: AddFollowersDTO) {
    return this.followerService.create(followrs);
  }
}
