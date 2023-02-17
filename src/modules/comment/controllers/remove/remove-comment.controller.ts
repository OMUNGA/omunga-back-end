import { Controller, Param, Delete, UseGuards } from '@nestjs/common';
import { RemoveCommentService } from '../../services/remove/remove-comment.service';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller('comment')
export class RemoveCommentController {
  constructor(private readonly commentService: RemoveCommentService) {}

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.commentService.remove(id);
  }
}
