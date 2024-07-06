import { Injectable } from '@nestjs/common';
import { messages } from '../../../../../shared/errorsMessages';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';

@Injectable()
export class FindOneCommentReplyService {
  constructor(private readonly replyRepo: CommentReplyRepository) {}

  async findOne(id: string) {
    try {
      return this.replyRepo.findOne(id);
    } catch (error) {
       throw new Error(messages.InternalServerError);
    }
  }
}
