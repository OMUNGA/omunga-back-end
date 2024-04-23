import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class FindOneCommentService {
  constructor(private readonly commentRepo: CommentsRepository) {}

  async findOne(id: string) {
    try {
      return this.commentRepo.findOne(id);
    } catch (error) {
       throw new Error(messages.InternalServerError);
    }
  }
}
