import { Injectable } from '@nestjs/common';

import { PostLikeRepository } from '../../repositories/postLikeRepositories';

@Injectable()
export class showAllTheLikesPostLikeService {
  constructor(private readonly postLikeRepo: PostLikeRepository) {}

  showAllTheLikesOfThePost(id: string) {
    try {
      return this.postLikeRepo.showAllTheLikes(id);
    } catch (error) {
      throw error;
    }
  }
}
