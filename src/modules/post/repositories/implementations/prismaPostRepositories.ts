import { Injectable } from '@nestjs/common';
import { PostRepository } from '../postRepositories';
import { CreatePostDto } from '../../dtos/create-post.dto';
import { UpdatePostDto } from '../../dtos/update-post.dto';
import { Posts } from '../../entities/post.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private prisma: PrismaService) { }
  async create(data: CreatePostDto): Promise<Posts> {
    const post = await this.prisma.post.create({
      data: data,
    });

    return post;
  }
  async findOne(id: string): Promise<Posts> {
    return this.prisma.post.findUnique({
      where: { postID: id, published: true },
      include: { user: true, PostLike: true, comment: true },
    });
  }
  async remove(id: string): Promise<void> {
    await this.prisma.post.update({
      where: { postID: id },
      data: { published: false, deletedAt: true },
    });
  }
  async findAll(): Promise<Posts[]> {
    return this.prisma.post.findMany({
      where: { deletedAt: false, published: true },
      include: {
        user: true,
        comment: true,
        PostLike: true
      }
    });
  }
  async update(id: string, data: UpdatePostDto): Promise<Posts> {
    return this.prisma.post.update({
      where: { postID: id },
      data: data,
    });
  }
  async searchPost(searchPost: string): Promise<Posts[]> {
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
