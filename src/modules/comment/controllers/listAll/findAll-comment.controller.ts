import { Controller, Get } from '@nestjs/common';
import { FindAllCommentService } from '../../services/listAll/findAll-comment.service';

@Controller('comments')
export class FindAllCommentController {
  constructor(private readonly commentService: FindAllCommentService) {}

  @Get()
  findAll() {
    return this.commentService.findAll();
  }
}
