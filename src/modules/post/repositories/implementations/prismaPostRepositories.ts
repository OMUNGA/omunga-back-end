import { Injectable } from '@nestjs/common';
import { PostRepository } from '../postRepositories';
import { CreatePostDto } from '../../dtos/create-post.dto';
import { UpdatePostDto } from '../../dtos/update-post.dto';
import { Posts } from '../../entities/post.entity';
import { PrismaService } from '../../../../prisma/prisma.service';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePostDto): Promise<Posts> {
    const post = await this.prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        description: data.description,
        cover: data.cover,
        tags: data.tags,
        userID: data.userID,
        slug: data.slug,
        published: data.published,
      },
    });

    return post;
  }
  async findOne(id: string): Promise<Posts> {
    return this.prisma.post.findUnique({
      where: { postID: id, published: true },
      include: { user: true, postLike: true, comment: true },
    });
  }
  async remove(id: string): Promise<void> {
    await this.prisma.post.update({
      where: { postID: id },
      data: { published: false, deletedAt: true },
    });
  }
  async findAll(skip: number, take: number): Promise<Posts[]> {
    const posts = await this.prisma.post.findMany({
      skip,
      take,
      where: { deletedAt: false, published: true },
      include: {
        user: true,
        comment: true,
        postLike: true,
      },
    });

    return posts;
  }

  async findUnpublishedPosts(
    skip: number,
    take: number,
    userID: string,
  ): Promise<Posts[]> {
    const posts = await this.prisma.post.findMany({
      skip,
      take,
      where: { deletedAt: false, published: false, userID: userID },
      include: {
        user: true,
        comment: true,
        postLike: true,
      },
    });

    return posts;
  }

  async update(id: string, data: UpdatePostDto): Promise<Posts> {
    return this.prisma.post.update({
      where: { postID: id },
      data: data,
    });
  }
  async searchPost(posttitle: string): Promise<Posts[]> {
    return this.prisma.post.findMany({
      where: {
        OR: [
          {
            title: { contains: posttitle },
          },
          {
            content: { contains: posttitle },
          },
        ],
        deletedAt: false,
        published: true,
      },
      include: {
        user: true,
        comment: true,
        postLike: true,
      },
    });
  }

  async findPostsByUserAndTitle(
    username: string,
    slug: string,
  ): Promise<Posts> {
    return this.prisma.post.findFirst({
      where: {
        OR: [
          {
            AND: [{ slug: slug }, { user: { username: username } }],
          },
          {
            OR: [
              { title: { contains: slug } },
              { content: { contains: slug } },
            ],
          },
        ],
        deletedAt: false,
        published: true,
      },
      include: {
        user: true,
        comment: true,
        postLike: true,
      },
    });
  }

  async count(): Promise<number> {
    return this.prisma.post.count();
  }

  async findByUserName(
    userName: string,
    skip: number,
    take: number,
  ): Promise<Posts[]> {
    const posts = await this.prisma.post.findMany({
      skip,
      take,
      where: {
        deletedAt: false,
        published: true,
        user: { username: userName },
      },
      include: {
        user: true,
        comment: true,
        postLike: true,
      },
    });
    return posts;
  }
}
