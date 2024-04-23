import { Injectable } from '@nestjs/common';
import { PostLikeRepository } from '../../repositories/postLikeRepositories';
import { CreatePostLikeDto } from '../../dtos/create-post-like.dto';
import { messages } from 'shared/errorsMessages';
import { PostLikes } from '../../entities/post-like.entity';

@Injectable()
export class CreatePostLikeService {
  constructor(private readonly postlikeRepo: PostLikeRepository) {}

  async create(createPostLikeDto: CreatePostLikeDto) {
    try {
      return await this.postlikeRepo.create(createPostLikeDto);
     
    } catch (error) {
      throw new Error(messages.InternalServerError)
    }
  }
}
