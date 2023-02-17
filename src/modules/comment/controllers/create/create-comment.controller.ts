import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { CreateCommentService } from '../../services/create/create-comment.service';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { Me } from '../../../../modules/account/decorator/current-user.guard';

@UseGuards(AuthUserGuard)
@Controller('comment')
export class CreateCommentController {
  constructor(private readonly commentService: CreateCommentService) {}

  @Post('/create')
  create(@Body() createCommentDto: CreateCommentDto, @Me() req: any) {
    createCommentDto.userID = req.sub.sub;
    return this.commentService.create(createCommentDto);
  }
}
