import { CreatePostLikeDto } from '../dtos/create-post-like.dto';
import { UpdatePostLikeDto } from '../dtos/update-post-like.dto';
import { PostLikes } from '../entities/post-like.entity';

export abstract class PostLikeRepository {
  abstract create(data: CreatePostLikeDto): Promise<PostLikes>;
  abstract findAll(): Promise<PostLikes[]>;
  abstract showAllTheLikes(id: string): Promise<number>;
  abstract findOne(id: string): Promise<PostLikes>;
  abstract update(id: string, data: UpdatePostLikeDto): Promise<PostLikes>;
  abstract remove(id: string): Promise<PostLikes>;
}
