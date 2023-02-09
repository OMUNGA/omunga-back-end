import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddFollowerService } from '../../services/Add-follower/Add-follower.service';
import { AddFollowerDTO } from '../../dtos/add-followers.dto';

@Controller('follower')
export class AddFollowerController {
  constructor(private readonly addFollowerService: AddFollowerService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() followrs: AddFollowerDTO) {
    return this.addFollowerService.follower(followrs);
  }
}
