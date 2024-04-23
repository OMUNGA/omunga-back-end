import { Comment } from '@prisma/client';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { CommentsRepository } from '../CommentsRepositories';
import { Injectable } from '@nestjs/common';
import { Comments } from '../../entities/comment.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class prismaCommentsRepository implements CommentsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCommentDto): Promise<Comments> {
    const comment = await this.prisma.comment.create({
      data: data,
    });

    return comment;
  }

  async findOne(id: string): Promise<Comments> {
    const comment = await this.prisma.comment.findUnique({
      where: {
        commentID: id,
      },
      include: {
        user: true,
      },
    });

    return comment;
  }
  async remove(id: string): Promise<Comments> {
   return await this.prisma.comment.update({
      where: { commentID: id },
      data: { deletedAt: true },
    });
  }

  async findAll(postID: string): Promise<Comments[]> {
    return await this.prisma.comment.findMany({
      where: { postID: postID, deletedAt: false},
      include: {
        user: true,
      },
    });
  }

  async update(data: UpdateCommentDto): Promise<Comments> {
    return this.prisma.comment.update({
      where: { commentID: data.commentID },
      data: data,
    });
  }
}
