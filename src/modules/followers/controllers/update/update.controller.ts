import { Controller, Patch, Param, Body } from '@nestjs/common';
import { UpdateFollowersDTO } from '../../dtos/update-follower.dto';
import { UpdateFollowersService } from '../../services/update/update-followers.service';

@Controller('update')
export class UpdateFollowersController {
  constructor(private UpdatefollowerService: UpdateFollowersService) {}

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatefollowersDTO: UpdateFollowersDTO,
  ) {
    return this.UpdatefollowerService.update(id, updatefollowersDTO);
  }
}
