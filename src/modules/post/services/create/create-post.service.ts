import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';
import { CreatePostDto } from '../../dtos/create-post.dto';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { messages } from '../../../../../shared/errorsMessages';
import { UserRole } from '@prisma/client';

@Injectable()
export class CreatePostService {
  constructor(
    private readonly postRepo: PostRepository,
    private userRepo: CreateUsersRepository,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const isLogged = await this.userRepo.findById(createPostDto.userID);

    if (!isLogged) {
      throw new UnauthorizedException(messages.Unauthenticated);
    }

    if (!isLogged || isLogged.role !== UserRole.MEMBER) {
      throw new UnauthorizedException(messages.InsufficientPermissions);
    }

    try {
      return this.postRepo.create({
        title: createPostDto.title,
        content: createPostDto.content,
        cover: createPostDto.cover ,
        tags: createPostDto.tags,
        userID: createPostDto.userID,
        published: false,
      });
    } catch (error) {
      throw new Error(messages.InternalServerError);
    }
  }
}
