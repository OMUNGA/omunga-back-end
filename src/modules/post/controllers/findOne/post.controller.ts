import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindOnePostService } from '../../services/findOne/findOne-post.service';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller('post')
export class FindOnePostController {
  constructor(private readonly postService: FindOnePostService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }
}
