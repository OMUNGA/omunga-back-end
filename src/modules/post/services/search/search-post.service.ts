import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';

@Injectable()
export class SearchPostService {
  constructor(private readonly postRepo: PostRepository) {}

  async searchPost(searchPost: string) {
    try {
      await this.postRepo.searchPost(searchPost);
    } catch (error) {
      throw error;
    }
  }
}
