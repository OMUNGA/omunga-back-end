import { Injectable } from '@nestjs/common';

import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { messages } from 'shared/errorsMessages';

@Injectable()
export class RemovePostLikeService {
  constructor(private readonly postLike: PostLikeRepository) {}

  async remove(id: string) {
    try {
      return this.postLike.remove(id);
    } catch (error) {
      throw new Error(messages.InternalServerError);
    }
  }
}
