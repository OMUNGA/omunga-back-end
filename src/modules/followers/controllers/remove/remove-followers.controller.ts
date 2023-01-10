import { RemoveFollowerService } from '../../services/remove/remove-followers.service';
import { Controller, Delete, Param } from '@nestjs/common';

@Controller('follower')
export class RemoveFollowersController {
  constructor(private RomoveFollowerService: RemoveFollowerService) {}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.RomoveFollowerService.remove(id);
  }
}
