import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostLikeService } from './post-like.service';
import { CreatePostLikeDto } from './dto/create-post-like.dto';
import { UpdatePostLikeDto } from './dto/update-post-like.dto';

@Controller('post-like')
export class PostLikeController {
  constructor(private readonly postLikeService: PostLikeService) {}

  @Post()
  create(@Body() createPostLikeDto: CreatePostLikeDto) {
    return this.postLikeService.create(createPostLikeDto);
  }

  @Get()
  findAll() {
    return this.postLikeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postLikeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostLikeDto: UpdatePostLikeDto) {
    return this.postLikeService.update(+id, updatePostLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postLikeService.remove(+id);
  }
}
