import { CreateCommentLikeDto } from '../../dto/create-comment-like.dto';
import { CommentLikesRepository } from '../commentLikeRepositories';
import { PrismaService } from '.././../../../prisma/prisma.service';
import { CommentLikes } from '../../entities/comment-like.entity';
import { Injectable } from '@nestjs/common';


@Injectable()
export class PrismaCommentLikeRepository implements CommentLikesRepository {
  constructor(private prisma: PrismaService) {}

  async create(commentInput: CreateCommentLikeDto): Promise<CommentLikes> {
    const comentLikes = await this.prisma.commentLike.create({
      data: commentInput,
    });

    return comentLikes;
  }

  async remove(commentLikeID: string): Promise<CommentLikes> {
    return await this.prisma.commentLike.update({
      where: { commentlikeID: commentLikeID },
      data: { deletedAt: true },
    });
  }

  async findAllCommentLikes(commentID: string): Promise<CommentLikes[]> {
    return await this.prisma.commentLike.findMany({
      where: {
        CommentID: commentID,
        deletedAt: false,
      },
      include: { comment: true },
    });
  }
}
