import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  UseGuards,
} from '@nestjs/common';
import { DeleteUserService } from '../../services/delete/delete-user.service';
import { AuthUserGuard } from '../../guards/auth.guard';

@UseGuards(AuthUserGuard)
@Controller('user')
export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    return this.deleteUserService.remove(id);
  }
}
