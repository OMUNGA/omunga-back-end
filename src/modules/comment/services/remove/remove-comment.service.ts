import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentsRepository } from '../../repositories/CommentsRepositories';

@Injectable()
export class RemoveCommentService {
  constructor(private readonly commentRepo: CommentsRepository) {}

  async remove(id: string) {
    const comment = await this.commentRepo.findOne(id);
    if (!comment) {
      throw new NotFoundException('Ups, comentário não encontrado');
    }
    return this.commentRepo.remove(id);
  }
}
