import { Injectable } from '@nestjs/common';
import { PostLikeRepository } from '../postLikeRepositories';
import { CreatePostLikeDto } from '../../dtos/create-post-like.dto';
import { UpdatePostLikeDto } from '../../dtos/update-post-like.dto';
import { PostLikes } from '../../entities/post-like.entity';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class PrismaPostLikeRepository implements PostLikeRepository {
  constructor(private prisma: PrismaService) {}
  async create(postLikeDTO: CreatePostLikeDto): Promise<PostLikes> {
    const postLiked = await this.prisma.postLike.create({
      data: postLikeDTO,
    });

    return postLiked
  }
  async findAll(): Promise<PostLikes[]> {
    return await this.prisma.postLike.findMany({ where: { deletedAt: false } });
  }
  async showAllTheLikes(id: string): Promise<number> {
    return await this.prisma.postLike.count({
      where: {
        postID: id,
        deletedAt: false,
      },
    });
  }
  async findOne(id: string): Promise<PostLikes> {
    return await this.prisma.postLike.findUnique({ where: { postlikeID: id } });
  }
  async update(
    id: string,
    updatePostLikeDto: UpdatePostLikeDto,
  ): Promise<PostLikes> {
    return await this.prisma.postLike.update({
      where: { postlikeID: id },
      data: updatePostLikeDto,
    });
  }
  async remove(id: string): Promise<PostLikes> {
   return await this.prisma.postLike.delete({
      where: { postlikeID: id },
    });
  }
}
