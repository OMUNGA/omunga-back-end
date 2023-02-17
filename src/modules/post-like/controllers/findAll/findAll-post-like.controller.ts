import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';

import { FindAllPostService } from '../../../../modules/post/services/findAll/findAll-post.service';

@UseGuards(AuthUserGuard)
@Controller('post-likes')
export class FindAllPostLikeController {
  constructor(private readonly postLikeService: FindAllPostService) {}

  @Get()
  findAll() {
    return this.postLikeService.findAll();
  }
}
