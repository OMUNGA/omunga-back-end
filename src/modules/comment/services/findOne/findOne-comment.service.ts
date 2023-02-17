import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../repositories/CommentsRepositories';

@Injectable()
export class FindOneCommentService {
  constructor(private readonly commentRepo: CommentsRepository) {}

  async findOne(id: string) {
    return this.commentRepo.findOne(id);
  }
}
