import { Controller, Body, Patch, Param, UseGuards } from '@nestjs/common';

import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { UpdatePostLikeService } from '../../services/update/update-post-like.service';
import { UpdatePostLikeDto } from '../../dtos/update-post-like.dto';

@UseGuards(AuthUserGuard)
@Controller('post-like')
export class UpdatePostLikeController {
  constructor(private readonly postLikeService: UpdatePostLikeService) {}

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostLikeDto: UpdatePostLikeDto,
  ) {
    return this.postLikeService.update(id, updatePostLikeDto);
  }
}
