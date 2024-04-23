import { Injectable, NotFoundException } from '@nestjs/common';

import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class UpdateCommentService {
  constructor(private readonly commentRepo: CommentsRepository) {}

  async update(updateCommentDto: UpdateCommentDto) {
      const comment = await this.commentRepo.findOne(updateCommentDto.commentID);
      if (!comment) {
        throw new NotFoundException('Ups, comentário não encontrado!');
      }
      return await this.commentRepo.update(updateCommentDto);
  }
}
