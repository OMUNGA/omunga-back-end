import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class FindOnePostService {
  constructor(private readonly postRepo: PostRepository) {}

  findOne(id: string) {
    try {
      return this.postRepo.findOne(id);
    } catch (error) {
      throw new Error(messages.InternalServerError);
    }
  }
}
