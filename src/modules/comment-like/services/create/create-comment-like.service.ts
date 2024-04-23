import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentLikeDto } from '../../dto/create-comment-like.dto';
import { CommentLikesRepository } from '../../repositories/commentLikeRepositories';
import { CommentsRepository } from '../../../../modules/comment/repositories/CommentsRepositories';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class CreateCommentLikeService {
  constructor(
    private commentLikeRepo: CommentLikesRepository,
    private commentRepo: CommentsRepository,
  ) {}
  async create(createCommentLikeDto: CreateCommentLikeDto) {
      const findComment = await this.commentRepo.findOne(
        createCommentLikeDto.CommentID,
      );

      if (!findComment) {
        throw new NotFoundException('Ups, comentário não encontrado');
      }

      const commentLike = await this.commentLikeRepo.create({
        CommentID: createCommentLikeDto.CommentID,
        userID:  createCommentLikeDto.userID
      })
      return commentLike;
  }
}
