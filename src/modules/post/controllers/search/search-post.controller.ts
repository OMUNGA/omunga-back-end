import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SearchPostService } from '../../services/search/search-post.service';
import { AuthUserGuard } from '../../../../modules/account/guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller('post')
export class SearchPostController {
  constructor(private readonly postService: SearchPostService) {}

  @Get('search/:searchPost')
  findPost(@Param('searchPost') searchPost: string) {
    return this.postService.searchPost(searchPost);
  }
}
