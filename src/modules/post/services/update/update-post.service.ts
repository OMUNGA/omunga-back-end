import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';
import { UpdatePostDto } from '../../dtos/update-post.dto';
import { Posts } from '../../entities/post.entity';
import { SlugTitle } from 'src/utils/utils';

@Injectable()
export class UpdatePostService {
  constructor(private readonly postRepo: PostRepository) {}

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Posts> {
    try {
      const slug = SlugTitle(updatePostDto.title);
      updatePostDto.slug = slug;
      const post = await this.postRepo.update(id, updatePostDto);
      return post;
    } catch (error) {
      throw error;
    }
  }
}
