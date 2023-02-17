import { Injectable } from '@nestjs/common';

import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { UpdatePostLikeDto } from '../../dtos/update-post-like.dto';

@Injectable()
export class UpdatePostLikeService {
  constructor(private readonly postLike: PostLikeRepository) {}

  async update(id: string, data: UpdatePostLikeDto) {
    try {
      return this.postLike.update(id, data);
    } catch (error) {
      throw error;
    }
  }
}
