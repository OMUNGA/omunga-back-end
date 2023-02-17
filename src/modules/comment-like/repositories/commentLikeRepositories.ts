import { CommentLike } from '@prisma/client';
import { CreateCommentLikeDto } from '../dto/create-comment-like.dto';

export abstract class CommentLikesRepository {
  abstract create(data: CreateCommentLikeDto): Promise<CommentLike>;
  abstract remove(id: string): Promise<void>;
  abstract findAll(): Promise<CommentLike[]>;
}
