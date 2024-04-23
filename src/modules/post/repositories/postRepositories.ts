import { CreatePostDto } from '../dtos/create-post.dto';
import { UpdatePostDto } from '../dtos/update-post.dto';
import { Posts } from '../entities/post.entity';

export abstract class PostRepository {
  abstract create(data: CreatePostDto): Promise<Posts>;
  abstract findOne(id: string): Promise<Posts>;
  abstract remove(id: string): Promise<void>;
  abstract findAll(): Promise<Posts[]>;
  abstract update(id: string, data: UpdatePostDto): Promise<Posts>;
  abstract searchPost(searchPost: string): Promise<Posts[]>;
}
