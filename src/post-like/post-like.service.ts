import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostLikeDto } from './dto/create-post-like.dto';
import { UpdatePostLikeDto } from './dto/update-post-like.dto';

@Injectable()
export class PostLikeService {

  constructor(private readonly prisma: PrismaService) { }

  create(createPostLikeDto: CreatePostLikeDto) {
    return this.prisma.postLike.create({
      data: createPostLikeDto
    })
  }

  findAll() {
    return this.prisma.postLike.findMany({ where: { deletedAt: false } })
  }

  showAllTheLikesOfThePost(id: string) {
    return this.prisma.postLike.count({
      select:{
        userID: true
      },
      where: {
        postID: id,
        deletedAt: false 
      }
    })
  }

  findOne(id: string) {
    return this.prisma.postLike.findUnique({ where: { postlikeID: id } });
  }

  update(id: string, updatePostLikeDto: UpdatePostLikeDto) {
    return this.prisma.postLike.update({
      where: { postlikeID: id },
      data: updatePostLikeDto
    });
  }

  remove(id: string) {
    return this.prisma.postLike.update({ where: { postlikeID: id }, data: { deletedAt: true } });
  }
}
