import { Injectable } from "@nestjs/common";
import { CommentReplyRepository } from "../comment-replyRepositories";
import { PrismaService } from "nestjs-prisma";
import { commentReply } from "../../entities/comment-reply.entity";
import { ReplyCommentDTO } from "../../dto/reply-comment.dto";
import { UpdateReplyCommentDTO } from "../../dto/update-comment-reply.dto";


@Injectable()
export class prismaCommentsReplyRepository implements CommentReplyRepository {
  constructor(private prisma: PrismaService) { }

  async create(data: ReplyCommentDTO): Promise<commentReply> {
    const response = await this.prisma.commentReply.create({
      data: {
        content: data.content,
        userID: data.userID,
        commentID: data.commentID
      },
    });

    return response;
  }

  async findOne(id: string): Promise<commentReply> {
    const comment = await this.prisma.commentReply.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true,
      },
    });

    return comment;
  }
  async remove(id: string): Promise<commentReply> {
    return await this.prisma.commentReply.delete({
      where: { id }
    })
  }

  async findAll(replyID: string): Promise<commentReply[]> {
    return await this.prisma.commentReply.findMany({
      where: { id: replyID },
      include: {
        user: true,
      },
    });
  }

  async update(data: UpdateReplyCommentDTO): Promise<commentReply> {
    return this.prisma.commentReply.update({
      where: { id: data.id },
      data: data,
    });
  }



}
