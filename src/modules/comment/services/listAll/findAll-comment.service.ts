import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../repositories/CommentsRepositories';

@Injectable()
export class FindAllCommentService {
  constructor(private readonly commentRepo: CommentsRepository) {}

  async findAll() {
    try {
      return this.commentRepo.findAll();
    } catch (error) {
      return { error: error.message };
    }
  }
}
