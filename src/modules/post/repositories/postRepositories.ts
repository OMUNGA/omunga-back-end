import { CreatePostDto } from '../dtos/create-post.dto';
import { UpdatePostDto } from '../dtos/update-post.dto';
import { Posts } from '../entities/post.entity';

export abstract class PostRepository {
  abstract create(data: CreatePostDto): Promise<Posts>;
  abstract findOne(id: string): Promise<Posts>;
  abstract findByUserID(id: string, skip: number, take: number): Promise<Posts[]>;
  abstract remove(id: string): Promise<void>;
  abstract findAll(skip: number, take: number): Promise<Posts[]>
  abstract findUnpublishedPosts(skip: number, take: number, userID: string): Promise<Posts[]>
  abstract update(id: string, data: UpdatePostDto): Promise<Posts>;
  abstract searchPost(posttitle: string): Promise<Posts[]>;
  abstract findPostsByUserAndTitle(username: string, posttitle: string): Promise<Posts>;
  abstract count(): Promise<number>;
}
