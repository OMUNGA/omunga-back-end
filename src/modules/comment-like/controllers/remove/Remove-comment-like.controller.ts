import { Controller, Param, Delete } from '@nestjs/common';
import { RemoveCommentLikeService } from '../../services/remove/Remove-comment-like.service';

@Controller('comment-like')
export class RemoveCommentLikeController {
  constructor(private readonly commentLikeService: RemoveCommentLikeService) {}

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.commentLikeService.remove(id);
  }
}
