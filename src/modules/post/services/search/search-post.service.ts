import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';
import { messages } from '../../../../../shared/errorsMessages';
import { Posts } from '../../entities/post.entity';

@Injectable()
export class SearchPostService {
  constructor(private readonly postRepo: PostRepository) {}

  async searchPost(posttitle: string): Promise<Posts[]> {
    try {
      const posts = await this.postRepo.searchPost(posttitle);
      return posts;
    } catch (error) {
      throw new Error(messages.InternalServerError);
    }
  }
}
