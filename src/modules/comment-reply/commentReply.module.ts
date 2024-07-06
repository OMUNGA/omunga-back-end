import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CreateCommentReplyService } from './services/create/create-comment.service';
import { prismaCommentsReplyRepository } from './repositories/implementations/PrismaComment-replyRepositories';
import { CommentReplyRepository } from './repositories/comment-replyRepositories';
import { CreateUsersRepository } from '../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../account/repositories/implementations/PrismaCreateUserRepository';
import { CommentsRepository } from '../comment/repositories/CommentsRepositories';
import { prismaCommentsRepository } from '../comment/repositories/implementations/PrismaCommentsRepositories';
import { FindOneCommentReplyService } from './services/findOne/findOne-commentReply.service';
import { FindAllReplyCommentService } from './services/listAll/findAll-commentReply.service';
import { RemoveCommentReplyService } from './services/remove/remove-commentReply.service';
import { UpdateCommentReplyService } from './services/update/update-commentReply.service';
import { CreateCommentReplyResolver } from './resolvers/create/create-comment-reply.resolver';
import { FindOneCommentResolver } from './resolvers/findOne/findOne-commentReply.resolver';
import { FindAllCommentReplyResolver } from './resolvers/listAll/findAll-comment.resolver';
import { RemoveCommentReplyResolver } from './resolvers/remove/remove-commentReply.resolver';
import { UpdateCommentReplyResolver } from './resolvers/update/update-commentReply.resolver';



@Module({
  controllers: [],
  providers: [
    CreateCommentReplyResolver,
    FindOneCommentResolver,
    FindAllCommentReplyResolver,
    RemoveCommentReplyResolver,
    UpdateCommentReplyResolver,

    CreateCommentReplyService,
    FindOneCommentReplyService,
    FindAllReplyCommentService,
    RemoveCommentReplyService,
    UpdateCommentReplyService,

    {
      provide: CommentReplyRepository,
      useClass: prismaCommentsReplyRepository,
    },
  
    {
      provide: CommentsRepository,
      useClass: prismaCommentsRepository,
    },
    
    {
      provide: CreateUsersRepository,
      useClass: PrismaCreateUserRepository,
    },
  ],
  imports: [PrismaModule],
})
export class CommentReplyModule {}
