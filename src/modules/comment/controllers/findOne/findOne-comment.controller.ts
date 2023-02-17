import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { FindOneService } from '../../../../modules/account/services/find-one/find-one-user.service';

@UseGuards(AuthUserGuard)
@Controller('comment')
export class FindOneCommentController {
  constructor(private readonly commentService: FindOneService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(id);
  }
}
