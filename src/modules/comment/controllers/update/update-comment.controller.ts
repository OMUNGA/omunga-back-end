import { Controller, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { UpdateCommentService } from '../../services/update/update-comment.service';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { Me } from '../../../../modules/account/decorator/current-user.guard';

@UseGuards(AuthUserGuard)
@Controller('comment')
export class UpdateCommentController {
  constructor(private readonly commentService: UpdateCommentService) {}

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
    @Me() req: any,
  ) {
    updateCommentDto.userID = req.sub.sub;
    return this.commentService.update(id, updateCommentDto);
  }
}
