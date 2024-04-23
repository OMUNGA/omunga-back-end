import { Injectable } from '@nestjs/common';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class FindAllCommentLikeService {
  constructor(private commentLikeRepo: CommentLikesRepository) {}
  async findAllCommentlikes(commentLike: string) {
    const commentLiked =
      await this.commentLikeRepo.findAllCommentLikes(commentLike);
    return commentLiked;
  }
}
