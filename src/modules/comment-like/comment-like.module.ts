import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateCommentLikeService } from './services/create/create-comment-like.service';
import { FindAllCommentLikeService } from './services/findAll/findAll-comment-like.service';
import { RemoveCommentLikeService } from './services/remove/Remove-comment-like.service';
import { CreateCommentLikeController } from './controllers/create/create-comment-like.controller';
import { FindAllCommentLikeController } from './controllers/findAll/findAll-comment-like.controller';
import { RemoveCommentLikeController } from './controllers/remove/Remove-comment-like.controller';
import { CommentLikesRepository } from './repositories/commentLikeRepositories';
import { PrismaCommentLikeRepository } from './repositories/implementations/PrismaCommentLinkeRepositories';
import { CommentsRepository } from '../comment/repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../comment/repositories/implementations/PrismaCommentsRepositories';

@Module({
  controllers: [
    CreateCommentLikeController,
    FindAllCommentLikeController,
    RemoveCommentLikeController,
  ],
  providers: [
    CreateCommentLikeService,
    FindAllCommentLikeService,
    RemoveCommentLikeService,

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
