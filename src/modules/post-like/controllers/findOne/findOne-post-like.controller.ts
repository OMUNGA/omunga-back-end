import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';

import { FindOnePostLikeService } from '../../services/findOne/findOne-post-like.service';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller('post-like')
export class FindOnePostLikeController {
  constructor(private readonly postLikeService: FindOnePostLikeService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postLikeService.findOne(id);
  }
}
