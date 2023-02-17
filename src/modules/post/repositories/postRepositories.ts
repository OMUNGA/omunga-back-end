import { Post } from '@prisma/client';
import { CreatePostDto } from '../dtos/create-post.dto';
import { UpdatePostDto } from '../dtos/update-post.dto';

export abstract class PostRepository {
  abstract create(data: CreatePostDto): Promise<Post>;
  abstract findOne(id: string): Promise<Post>;
  abstract remove(id: string): Promise<void>;
  abstract findAll(): Promise<Post[]>;
  abstract update(id: string, data: UpdatePostDto): Promise<Post>;
  abstract searchPost(searchPost: string): Promise<Post[]>;
}
