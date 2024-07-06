import { Injectable } from '@nestjs/common';
import { messages } from '../../../../../shared/errorsMessages';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';

@Injectable()
export class FindAllReplyCommentService {
  constructor(private readonly replyRepo: CommentReplyRepository) {}

  async findAll(commentID: string) {
    try {
      return this.replyRepo.findAll(commentID);
    } catch (error) {
       throw new Error(messages.InternalServerError);
    }
  }
}
