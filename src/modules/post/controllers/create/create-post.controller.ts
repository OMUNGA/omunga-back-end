import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreatePostService } from '../../services/create/create-post.service';
import { CreatePostDto } from '../../dtos/create-post.dto';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';
import { Me } from '../../../../modules/account/decorator/current-user.guard';

@UseGuards(AuthUserGuard)
@Controller('post')
export class CreatePostController {
  constructor(private readonly createPostService: CreatePostService) {}

  @Post('create')
  create(@Body() createPostDto: CreatePostDto, @Me() req: any) {
    createPostDto.userID = req.sub.sub;
    return this.createPostService.create(createPostDto);
  }
}
