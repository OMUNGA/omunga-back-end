import { Controller, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { UpdatePostService } from '../../services/update/update-post.service';
import { UpdatePostDto } from '../../dtos/update-post.dto';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller('post')
export class UpdatePostController {
  constructor(private readonly postService: UpdatePostService) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }
}
