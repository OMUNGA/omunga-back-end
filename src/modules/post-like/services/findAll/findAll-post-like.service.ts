import { Injectable } from '@nestjs/common';

import { PostLikeRepository } from '../../repositories/postLikeRepositories';

@Injectable()
export class FindAllPostLikeService {
  constructor(private readonly postlikeRepo: PostLikeRepository) {}

  async findAll() {
    try {
      return this.postlikeRepo.findAll();
    } catch (error) {
      throw error;
    }
  }
}
