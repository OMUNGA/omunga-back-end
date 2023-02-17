import { Controller, Param, Delete, UseGuards } from '@nestjs/common';
import { RemovePostService } from '../../services/remove/remove-post.service';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller('post')
export class RemovePostController {
  constructor(private readonly postService: RemovePostService) {}

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.postService.remove(id);
  }
}
