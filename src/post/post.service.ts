import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {

  constructor(private readonly prisma: PrismaService) { }

  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({ data: createPostDto })
  }

  findAll() {
    return this.prisma.post.findMany({ where: { deletedAt: false, published: true } })
  }

  findOne(id: string) {
    return this.prisma.post.findUnique({ where: { postID: id } })
  }

  searchPost(searchPost: string) {
    return this.prisma.post.findMany({
      where: {
        OR: [
          {
            title: { contains: searchPost }
          },
          {
            content: { contains: searchPost }
          }
        ]
      }
    });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { postID: id },
      data: updatePostDto
    })
  }

  remove(id: string) {
    return this.prisma.post.update({
      where: { postID: id },
      data: { published: false, deletedAt: true }
    })
  }
}
