import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../repositories/postRepositories';
import { messages } from '../../../../../shared/errorsMessages';
import { PaginatedPosts } from '../../dtos/pagination-post';
import { PaginationInput } from '../../dtos/pagination-input';
import { PostsOutput } from '../../dtos/posts.output';

@Injectable()
export class findUnpublishedPostsService {
  constructor(private readonly postRepo: PostRepository) {}

    async findAllUnpublishedPosts(userID: string,paginationInput: PaginationInput): Promise<PaginatedPosts> {
    try {
      const { page, limit } = paginationInput;
  
      const skip = (page - 1) * limit;
  
      const posts = await this.postRepo.findUnpublishedPosts(skip, limit,userID);
  
      const totalPosts = await this.postRepo.count();
  
      const totalPages = Math.ceil(totalPosts / limit);
  
      const postsOutput: PostsOutput[] = posts.map((post) => ({
        postID: post.postID,
        title: post.title,
        content: post.content,
        cover: post.cover,
        userID: post.userID,
        tags: post.tags,
        user: post.user,
        slug: post.slug,
        description: post.description,
        comment: post.comment,
        postLike: post.postLike,
        published: post.published,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        deletedAt: post.deletedAt,
      }));
  
      const paginatedPosts: PaginatedPosts = {
        posts: postsOutput,
        totalPages,
        totalPosts,
        currentPage: page,
      };
  
      return paginatedPosts;
    } catch (error) {
      throw new Error(messages.InternalServerError);
    }
  }
  
}
