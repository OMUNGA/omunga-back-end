import { PostLike } from '@prisma/client';
import { CreatePostLikeDto } from '../dtos/create-post-like.dto';
import { UpdatePostLikeDto } from '../dtos/update-post-like.dto';

export abstract class PostLikeRepository {
  abstract create(data: CreatePostLikeDto): Promise<void>;
  abstract findAll(): Promise<PostLike[]>;
  abstract showAllTheLikes(id: string);
  abstract findOne(id: string): Promise<PostLike>;
  abstract update(id: string, data: UpdatePostLikeDto): Promise<PostLike>;
  abstract remove(id: string): Promise<void>;
}
