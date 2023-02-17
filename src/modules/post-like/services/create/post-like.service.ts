import { Injectable } from '@nestjs/common';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { CreatePostLikeDto } from '../../dtos/create-post-like.dto';

@Injectable()
export class CreatePostLikeService {
  constructor(private readonly postlikeRepo: PostLikeRepository) {}

  async create(createPostLikeDto: CreatePostLikeDto) {
    try {
      return this.postlikeRepo.create(createPostLikeDto);
    } catch (error) {
      throw error;
    }
  }
}
