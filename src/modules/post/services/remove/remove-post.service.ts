import { Injectable } from '@nestjs/common';

import { PostRepository } from '../../repositories/postRepositories';

@Injectable()
export class RemovePostService {
  constructor(private readonly postRepo: PostRepository) {}

  async remove(id: string) {
    try {
      return this.postRepo.remove(id);
    } catch (error) {
      throw error;
    }
  }
}
