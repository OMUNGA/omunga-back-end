import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';
import { CreatePostDto } from '../../dtos/create-post.dto';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';

@Injectable()
export class CreatePostService {
  constructor(
    private readonly postRepo: PostRepository,
    private userRepo: CreateUsersRepository,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const isLogged = await this.userRepo.findById(createPostDto.userID);

    if (!isLogged) {
      throw new UnauthorizedException(
        'Ups, precisa fazer login para fazer o seu post...',
      );
    }

    try {
      return this.postRepo.create({
        title: createPostDto.title,
        content: createPostDto.content,
        userID: createPostDto.userID,
        published: true,
      });
    } catch (error) {
      return { error: error.message };
    }
  }
}
