import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../repositories/CommentsRepositories';

@Injectable()
export class FindOneCommentService {
  constructor(private readonly commentRepo: CommentsRepository) {}

  async findOne(id: string) {
    try {
      return this.commentRepo.findOne(id);
    } catch (error) {
      return { error: error.message };
    }
  }
}
