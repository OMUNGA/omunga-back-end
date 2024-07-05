import { UpdateCommentDto } from '../dto/update-comment.dto';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { Comments } from '../entities/comment.entity';
import { ReplyCommentDTO } from '../dto/reply-comment.dto';

export abstract class CommentsRepository {
  abstract create(data: CreateCommentDto): Promise<Comments>;
  abstract findOne(id: string): Promise<Comments>;
  abstract remove(id: string): Promise<Comments>;
  abstract findAll(postID: string): Promise<Comments[]>;
  abstract update(data: UpdateCommentDto): Promise<Comments>;
}
