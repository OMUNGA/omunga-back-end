import { Injectable } from '@nestjs/common';

import { PostLikeRepository } from '../../repositories/postLikeRepositories';

@Injectable()
export class RemovePostLikeService {
  constructor(private readonly postLike: PostLikeRepository) {}

  async remove(id: string) {
    try {
      return this.postLike.remove(id);
    } catch (error) {
      return { error: error.message };
    }
  }
}
