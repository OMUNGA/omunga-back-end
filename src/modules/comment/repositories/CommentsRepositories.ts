import { Comment } from '@prisma/client';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { CreateCommentDto } from '../dto/create-comment.dto';

export abstract class CommentsRepository {
  abstract create(data: CreateCommentDto): Promise<Comment>;
  abstract findOne(id: string): Promise<Comment>;
  abstract remove(id: string): Promise<void>;
  abstract findAll(): Promise<Comment[]>;
  abstract update(id: string, data: UpdateCommentDto): Promise<Comment>;
}
