import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: createCommentDto,
    });
  }

  findAll() {
    return this.prisma.comment.findMany({ where: { deletedAt: false } });
  }

  findOne(id: string) {
    return this.prisma.comment.findUnique({ where: { commentID: id } });
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comment.update({
      where: { commentID: id },
      data: updateCommentDto,
    });
  }

  remove(id: string) {
    return this.prisma.comment.update({
      where: { commentID: id },
      data: { deletedAt: true },
    });
  }
}
