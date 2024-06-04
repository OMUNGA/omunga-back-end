import { Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';
import { messages } from '../../../../../shared/errorsMessages';
import { Posts } from '../../entities/post.entity';
import { CreateUsersRepository } from 'src/modules/account/repositories/createUserRepository';

@Injectable()
export class FindPostsByUserAndTitleService {
  constructor(
    private readonly postRepo: PostRepository,
    private readonly userRepo: CreateUsersRepository,
  ) {}

  async searchPost(username: string, slug: string): Promise<Posts> {
    const userNameExists = await this.userRepo.findByUsername(username);
    if (!userNameExists) {
      throw new NotFoundException(messages.userNameNotfound);
    }
    const posts = await this.postRepo.findPostsByUserAndTitle(
      username,
      slug,
    );

    if (!posts) {
      throw new NotFoundException(messages.postNotfound);
    }
    return posts;
  }
}
