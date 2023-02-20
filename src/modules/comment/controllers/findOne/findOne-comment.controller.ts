import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { FindOneCommentService } from '../../services/findOne/findOne-comment.service';

@UseGuards(AuthUserGuard)
@Controller('comment')
export class FindOneCommentController {
  constructor(private readonly commentService: FindOneCommentService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(id);
  }
}
