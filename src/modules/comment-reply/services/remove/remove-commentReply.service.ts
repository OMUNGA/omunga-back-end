import { Injectable, NotFoundException } from '@nestjs/common';
import { messages } from '../../../../../shared/errorsMessages';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';

@Injectable()
export class RemoveCommentReplyService {
  constructor(private readonly replyRepo: CommentReplyRepository) {}

  async remove(id: string) {
    try {
      const response = await this.replyRepo.findOne(id);
      if (!response) {
        throw new NotFoundException('Ups, resposta não encontrado');
      }
      return this.replyRepo.remove(id);
    } catch (error) {
      throw new Error(messages.InternalServerError);
    }
  }
}
