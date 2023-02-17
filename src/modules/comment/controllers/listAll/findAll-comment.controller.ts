import { Controller, Get } from '@nestjs/common';
import { FindAllUserService } from '../../../../modules/account/services/find-all-users/find-all-users.service';

@Controller('comments')
export class FindAllCommentController {
  constructor(private readonly commentService: FindAllUserService) {}

  @Get()
  findAll() {
    return this.commentService.findAll();
  }
}
