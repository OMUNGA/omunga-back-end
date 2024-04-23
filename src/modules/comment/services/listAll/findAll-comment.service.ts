import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class FindAllCommentService {
  constructor(private readonly commentRepo: CommentsRepository) {}

  async findAll(postID: string) {
    try {
      return this.commentRepo.findAll(postID);
    } catch (error) {
       throw new Error(messages.InternalServerError);
    }
  }
}
