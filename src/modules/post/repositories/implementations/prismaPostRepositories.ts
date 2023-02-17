import { Injectable } from '@nestjs/common';
import { PostRepository } from '../postRepositories';
import { Post } from '@prisma/client';
import { CreatePostDto } from '../../dtos/create-post.dto';
import { UpdatePostDto } from '../../dtos/update-post.dto';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreatePostDto): Promise<Post> {
    const post = await this.prisma.post.create({
      data: data,
    });

    return post;
  }
  async findOne(id: string): Promise<Post> {
    return this.prisma.post.findUnique({ where: { postID: id } });
  }
  async remove(id: string): Promise<void> {
    await this.prisma.post.update({
      where: { postID: id },
      data: { published: false, deletedAt: true },
    });
  }
  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: { deletedAt: false, published: true },
    });
  }
  update(id: string, data: UpdatePostDto): Promise<Post> {
    return this.prisma.post.update({
      where: { postID: id },
      data: data,
    });
  }
  searchPost(searchPost: string): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: {
        OR: [
          {
            title: { contains: searchPost },
          },
          {
            content: { contains: searchPost },
          },
        ],
      },
    });
  }
}
