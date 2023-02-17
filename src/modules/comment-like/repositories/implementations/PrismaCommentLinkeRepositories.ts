import { CommentLike } from '@prisma/client';
import { CreateCommentLikeDto } from '../../dto/create-comment-like.dto';
import { CommentLikesRepository } from '../commentLikeRepositories';
import { PrismaService } from '.././../../../prisma/prisma.service';

export class PrismaCommentLikeRepository implements CommentLikesRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateCommentLikeDto): Promise<CommentLike> {
    const like = await this.prisma.commentLike.create({
      data: data,
      include: { comment: true },
    });
    return like;
  }

  async remove(id: string): Promise<void> {
    await this.prisma.commentLike.update({
      where: { commentlikeID: id },
      data: { deletedAt: true },
    });
  }

  async findAll(): Promise<CommentLike[]> {
    return await this.prisma.commentLike.findMany({
      where: { deletedAt: false },
      include: { comment: true },
    });
  }
}
