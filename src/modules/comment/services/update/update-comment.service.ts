import { Injectable, NotFoundException } from '@nestjs/common';

import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { UpdateCommentDto } from '../../dto/update-comment.dto';

@Injectable()
export class UpdateCommentService {
  constructor(private readonly commentRepo: CommentsRepository) {}

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.commentRepo.findOne(id);

    if (!comment) {
      throw new NotFoundException('Ups, comentário não encontrado!');
    }
    return await this.commentRepo.update(id, updateCommentDto);
  }
}
