import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserService } from '../../services/update/update-user.service';
import { UpdateUserDTO } from '../../dtos/Update-user.dto ';

const baseURL = process.env.BASE_PATH;

@Controller(`${baseURL}/user`)
export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDTO) {
    return this.updateUserService.update(id, updateUserDto);
  }
}
