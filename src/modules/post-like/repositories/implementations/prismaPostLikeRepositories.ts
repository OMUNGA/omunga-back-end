import { Injectable } from '@nestjs/common';
import { PostLikeRepository } from '../postLikeRepositories';
import { PostLike } from '@prisma/client';
import { CreatePostLikeDto } from '../../dtos/create-post-like.dto';
import { UpdatePostLikeDto } from '../../dtos/update-post-like.dto';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class PrismaPostLikeRepository implements PostLikeRepository {
  constructor(private prisma: PrismaService) {}
  async create(postLikeDTO: CreatePostLikeDto): Promise<void> {
    await this.prisma.postLike.create({
      data: postLikeDTO,
    });
  }
  async findAll(): Promise<PostLike[]> {
    return await this.prisma.postLike.findMany({ where: { deletedAt: false } });
  }
  async showAllTheLikes(id: string) {
    return await this.prisma.postLike.count({
      select: {
        userID: true,
      },
      where: {
        postID: id,
        deletedAt: false,
      },
    });
  }
  async findOne(id: string): Promise<PostLike> {
    return await this.prisma.postLike.findUnique({ where: { postlikeID: id } });
  }
  async update(
    id: string,
    updatePostLikeDto: UpdatePostLikeDto,
  ): Promise<PostLike> {
    return await this.prisma.postLike.update({
      where: { postlikeID: id },
      data: updatePostLikeDto,
    });
  }
  async remove(id: string): Promise<void> {
    await this.prisma.postLike.update({
      where: { postlikeID: id },
      data: { deletedAt: true },
    });
  }
}
