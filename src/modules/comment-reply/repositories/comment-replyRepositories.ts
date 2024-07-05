import { ReplyCommentDTO } from "../dto/reply-comment.dto";
import { UpdateReplyCommentDTO } from "../dto/update-comment.dto";
import { commentReply } from "../entities/comment-reply.entity";


export abstract class CommentReplyRepository {
  abstract create(data: ReplyCommentDTO): Promise<commentReply>;
  abstract findOne(id: string): Promise<commentReply>;
  abstract remove(id: string): Promise<commentReply>;
  abstract findAll(replyID: string): Promise<commentReply[]>;
  abstract update(data: UpdateReplyCommentDTO): Promise<commentReply>;
}
