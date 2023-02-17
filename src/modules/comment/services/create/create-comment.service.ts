import { Injectable } from '@nestjs/common';
import { CommentsRepository } from '../../repositories/CommentsRepositories';
import { CreateCommentDto } from '../../dto/create-comment.dto';

@Injectable()
export class CreateCommentService {
  constructor(private readonly commentRepo: CommentsRepository) {}

  async create(createCommentDto: CreateCommentDto) {
    const comment = await this.commentRepo.create(createCommentDto);
    return comment;
  }
}
