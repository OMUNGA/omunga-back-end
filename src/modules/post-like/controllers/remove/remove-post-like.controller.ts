import { Controller, Param, Delete, UseGuards } from '@nestjs/common';

import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { RemovePostLikeService } from '../../services/remove/remove-post-like.service';

@UseGuards(AuthUserGuard)
@Controller('post-like')
export class RemovePostLikeController {
  constructor(private readonly postLikeService: RemovePostLikeService) {}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postLikeService.remove(id);
  }
}
