import { CreateCommentLikeDto } from '../dto/create-comment-like.dto';
import { CommentLikes } from '../entities/comment-like.entity';

export abstract class CommentLikesRepository {
  abstract create(data: CreateCommentLikeDto): Promise<CommentLikes>;
  abstract remove(id: string): Promise<CommentLikes>;
  abstract findAllCommentLikes(commentID: string): Promise<CommentLikes[]>;
}
