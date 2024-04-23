import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class CreateCommentService {
  constructor(private readonly commentRepo: CommentsRepository) {}

  async create(createCommentDto: CreateCommentDto) {
    try {
      const comment = await this.commentRepo.create(createCommentDto);
      return comment;
    } catch (error) {
       throw new Error(messages.InternalServerError);
    }
  }
}
