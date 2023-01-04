import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { DeleteUserService } from '../../services/delete/delete-user.service';

@Controller('api/v1/user')
export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    return this.deleteUserService.remove(id);
  }
}
