import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { FindAllCommentLikeService } from '../../services/findAll/findAll-comment-like.service';

@UseGuards(AuthUserGuard)
@Controller('comment-likes')
export class FindAllCommentLikeController {
  constructor(private readonly commentLikeService: FindAllCommentLikeService) {}

  @Get()
  findAll() {
    return this.commentLikeService.findAll();
  }
}
