import { Injectable } from '@nestjs/common';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';

@Injectable()
export class RemoveCommentLikeService {
  constructor(private commentLikeRepo: CommentLikesRepository) {}

  async remove(id: string) {
    try {
      return this.commentLikeRepo.remove(id);
    } catch (error) {}
  }
}
