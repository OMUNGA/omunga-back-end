import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { UpdateUserService } from '../../services/update/update-user.service';
import { UpdateUserDTO } from '../../dtos/Update-user.dto ';
import { AuthUserGuard } from '../../guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller(`user`)
export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDTO) {
    return this.updateUserService.update(id, updateUserDto);
  }
}
