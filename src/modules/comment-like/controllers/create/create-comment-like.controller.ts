import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateCommentLikeService } from '../../services/create/create-comment-like.service';
import { CreateCommentLikeDto } from '../../dto/create-comment-like.dto';
import { Me } from '../../../../modules/account/decorator/current-user.guard';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller('comment-like')
export class CreateCommentLikeController {
  constructor(private readonly commentLikeService: CreateCommentLikeService) {}

  @Post()
  create(@Body() createCommentLikeDto: CreateCommentLikeDto, @Me() req: any) {
    createCommentLikeDto.userID = req.sub.sub;
    return this.commentLikeService.create(createCommentLikeDto);
  }
}
