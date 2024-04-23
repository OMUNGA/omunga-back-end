import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class SearchPostService {
  constructor(private readonly postRepo: PostRepository) {}

  async searchPost(searchPost: string) {
    try {
      await this.postRepo.searchPost(searchPost);
    } catch (error) {
       throw new Error(messages.InternalServerError);
    }
  }
}
