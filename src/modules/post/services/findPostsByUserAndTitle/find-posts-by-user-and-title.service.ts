import { Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';
import { messages } from '../../../../../shared/errorsMessages';
import { Posts } from '../../entities/post.entity';
import { CreateUsersRepository } from 'src/modules/account/repositories/createUserRepository';
import { FindPostInput } from '../../dtos/find-post-output';

@Injectable()
export class FindPostsByUserAndTitleService {
  constructor(
    private readonly postRepo: PostRepository,
    private readonly userRepo: CreateUsersRepository,
  ) {}

  async searchPost(data: FindPostInput): Promise<Posts> {
    const userNameExists = await this.userRepo.findByUsername(data.userName);
    if (!userNameExists) {
      throw new NotFoundException(messages.userNameNotfound);
    }

    let posts: Posts;
    if (data.isAuthenticated) {
      posts = await this.postRepo.findUnpublishedPostsByUserAndTitle(data);
    } else {
      posts = await this.postRepo.findPostsByUserAndTitle(data);
    }

    if (!posts) {
      throw new NotFoundException(messages.postNotfound);
    }
    return posts;
  }
}
