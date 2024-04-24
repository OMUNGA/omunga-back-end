import { Module } from '@nestjs/common';
import { CreateCommentLikeService } from './services/create/create-comment-like.service';
import { FindAllCommentLikeService } from './services/findAll/findAll-comment-like.service';
import { RemoveCommentLikeService } from './services/remove/Remove-comment-like.service';
import { CommentLikesRepository } from './repositories/commentLikeRepositories';
import { PrismaCommentLikeRepository } from './repositories/implementations/PrismaCommentLinkeRepositories';
import { CommentsRepository } from '../comment/repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../comment/repositories/implementations/PrismaCommentsRepositories';
import { CreateCommentLikeResolver } from './resolver/create/create-comment-like.resolver';
import { FindAllCommentLikeResolver } from './resolver/findAll/findAll-comment-like.resolver';
import { RemoveCommentLikeResolver } from './resolver/remove/Remove-comment-like.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [],
  providers: [
    CreateCommentLikeService,
    FindAllCommentLikeService,
    RemoveCommentLikeService,

    CreateCommentLikeResolver,
    FindAllCommentLikeResolver,
    RemoveCommentLikeResolver,

    {
      provide: CommentLikesRepository,
      useClass: PrismaCommentLikeRepository,
    },
    {
      provide: CommentsRepository,
      useClass: prismaCommentsRepository,
    },
  ],
  imports: [PrismaModule],
})
export class CommentLikeModule {}
