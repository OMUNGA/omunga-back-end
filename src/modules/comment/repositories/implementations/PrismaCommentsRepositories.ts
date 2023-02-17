import { Comment } from '@prisma/client';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { CommentsRepository } from '../CommentsRepositories';
import { PrismaService } from '../../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class prismaCommentsRepository implements CommentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCommentDto): Promise<Comment> {
    const comment = await this.prisma.comment.create({
      data: data,
    });

    return comment;
  }

  async findOne(id: string): Promise<Comment> {
    const comment = await this.prisma.comment.findUnique({
      where: {
        commentID: id,
      },
    });

    return comment;
  }
  async remove(id: string): Promise<void> {
    await this.prisma.comment.update({
      where: { commentID: id },
      data: { deletedAt: true },
    });
  }

  async findAll(): Promise<Comment[]> {
    return await this.prisma.comment.findMany({ where: { deletedAt: false } });
  }
  update(id: string, data: UpdateCommentDto): Promise<Comment> {
    return this.prisma.comment.update({
      where: { commentID: id },
      data: data,
    });
  }
}
