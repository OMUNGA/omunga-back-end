import { Injectable } from '@nestjs/common';

import { PostLikeRepository } from '../../repositories/postLikeRepositories';

@Injectable()
export class FindOnePostLikeService {
  constructor(private readonly postRepo: PostLikeRepository) {}

  async findOne(id: string) {
    try {
      return this.postRepo.findOne(id);
    } catch (error) {
      throw error;
    }
  }
}
