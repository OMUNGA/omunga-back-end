import { Controller, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { CreatePostLikeDto } from '../../dtos/create-post-like.dto';
import { CreatePostLikeService } from '../../services/create/post-like.service';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { Me } from '../../../../modules/account/decorator/current-user.guard';

@UseGuards(AuthUserGuard)
@Controller('post-like')
export class CreatePostLikeController {
  constructor(private readonly postLikeService: CreatePostLikeService) {}

  @Post()
  create(@Body() createPostLikeDto: CreatePostLikeDto, @Me() req: any) {
    createPostLikeDto.userID = req.sub.sub;
    return this.postLikeService.create(createPostLikeDto);
  }
}
