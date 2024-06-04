import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';
import { CreatePostDto } from '../../dtos/create-post.dto';
import { CreateUsersRepository } from '../../../../modules/account/repositories/createUserRepository';
import { messages } from '../../../../../shared/errorsMessages';
import { UserRole } from '@prisma/client';
import { SlugTitle } from 'src/utils/utils';

@Injectable()
export class CreatePostService {
  constructor(
    private readonly postRepo: PostRepository,
    private userRepo: CreateUsersRepository,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const user = await this.userRepo.findById(createPostDto.userID);
    const slug = SlugTitle(createPostDto.title);

    if (!user) {
      throw new UnauthorizedException(messages.NotFoundUser);
    }

    if (!user || user.role !== UserRole.MEMBER) {
      throw new UnauthorizedException(messages.InsufficientPermissions);
    }

    try {
      return this.postRepo.create({
        title: createPostDto.title,
        content: createPostDto.content,
        cover: createPostDto.cover,
        tags: createPostDto.tags,
        slug: slug,
        description: createPostDto.description,
        userID: createPostDto.userID,
        published: createPostDto.published,
      });
    } catch (error) {
      throw new Error(messages.InternalServerError);
    }
  }
}
