import { Injectable } from '@nestjs/common';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';

@Injectable()
export class FindAllCommentLikeService {
  constructor(private commentLikeRepo: CommentLikesRepository) {}
  async findAll() {
    try {
      const commentLiked = await this.commentLikeRepo.findAll();
      return commentLiked;
    } catch (error) {
      throw error;
    }
  }
}
