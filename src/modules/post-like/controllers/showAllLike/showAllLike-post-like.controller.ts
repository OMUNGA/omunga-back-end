import { Controller, Get, Param, UseGuards } from '@nestjs/common';

import { showAllTheLikesPostLikeService } from '../../services/showAllLike/showAllLike-post-like.service';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller('post-like')
export class ShowAllLikeOfPostLikeController {
  constructor(
    private readonly postLikeService: showAllTheLikesPostLikeService,
  ) {}

  @Get(':id')
  findAllLikesOfThePost(@Param('id') id: string) {
    return this.postLikeService.showAllTheLikesOfThePost(id);
  }
}
