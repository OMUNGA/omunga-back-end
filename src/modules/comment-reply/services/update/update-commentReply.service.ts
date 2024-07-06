import { Injectable, NotFoundException } from '@nestjs/common';

import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';
import { UpdateReplyCommentDTO } from '../../dto/update-comment-reply.dto';

@Injectable()
export class UpdateCommentReplyService {
  constructor(private readonly replyRepo: CommentReplyRepository) {}

  async update(updateCommentReplyDto: UpdateReplyCommentDTO) {
      const comment = await this.replyRepo.findOne(updateCommentReplyDto.commentID);
      if (!comment) {
        throw new NotFoundException('Ups, comentário não encontrado!');
      }
      return await this.replyRepo.update(updateCommentReplyDto);
  }
}
