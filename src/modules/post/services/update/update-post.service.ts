import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';
import { Post } from '@prisma/client';
import { UpdatePostDto } from '../../dtos/update-post.dto';

@Injectable()
export class UpdatePostService {
  constructor(private readonly postRepo: PostRepository) {}

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Post> {
    try {
      const post = await this.postRepo.update(id, updatePostDto);
      return post;
    } catch (error) {
      throw error;
    }
  }
}
