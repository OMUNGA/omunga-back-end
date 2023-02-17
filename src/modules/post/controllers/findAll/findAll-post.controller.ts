import { Controller, Get, UseGuards } from '@nestjs/common';
import { FindAllPostService } from '../../services/findAll/findAll-post.service';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller('posts')
export class FindAllPostController {
  constructor(private readonly postService: FindAllPostService) {}

  @Get()
  async findAll() {
    return await this.postService.findAll();
  }
}
