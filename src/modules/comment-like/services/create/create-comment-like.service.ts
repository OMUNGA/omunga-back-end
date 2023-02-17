import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentLikeDto } from '../../dto/create-comment-like.dto';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';
import { CommentsRepository } from '../../../../modules/comment/repositories/CommentsRepositories';

@Injectable()
export class CreateCommentLikeService {
  constructor(
    private commentLikeRepo: CommentLikesRepository,
    private commentRepo: CommentsRepository,
  ) {}
  async create(createCommentLikeDto: CreateCommentLikeDto) {
    try {
      const findComment = await this.commentRepo.findOne(
        createCommentLikeDto.CommentID,
      );

      if (!findComment) {
        throw new NotFoundException('Ups, comentário não encontrado');
      }

      const commentLike = await this.commentLikeRepo.create(
        createCommentLikeDto,
      );
      return commentLike;
    } catch (error) {
      throw error;
    }
  }
}
