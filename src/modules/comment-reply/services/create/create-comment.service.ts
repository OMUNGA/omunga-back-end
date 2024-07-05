import { Injectable, NotFoundException } from '@nestjs/common';
import { messages } from '../../../../../shared/errorsMessages';
import { CommentReplyRepository } from '../../repositories/comment-replyRepositories';
import { ReplyCommentDTO } from '../../dto/reply-comment.dto';
import { CreateUsersRepository } from 'src/modules/account/repositories/createUserRepository';
import { CommentsRepository } from 'src/modules/comment/repositories/CommentsRepositories';

@Injectable()
export class CreateCommentReplyService {
  constructor(
    private readonly replyCommentRepo: CommentReplyRepository,
     private readonly userRepo: CreateUsersRepository,
    private readonly commentRepo: CommentsRepository
    ) {}

  async create(replyCommentInput: ReplyCommentDTO) {
    try {
      const user = await this.userRepo.findById(replyCommentInput.userID)
      if (!user){
        throw new NotFoundException(messages.userNameNotfound)
      }

      const comment = await this.commentRepo.findOne(replyCommentInput.commentID)

      if (!comment){
        throw new NotFoundException(messages.commentNotFound)
      }

      const response = await this.replyCommentRepo.create(replyCommentInput);
      return response;
    } catch (error) {
       throw new Error(messages.InternalServerError);
    }
  }
}
