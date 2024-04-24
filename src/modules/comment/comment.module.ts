import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CreateCommentService } from './services/create/create-comment.service';

import { UpdateCommentService } from './services/update/update-comment.service';
import { RemoveCommentService } from './services/remove/remove-comment.service';
import { CommentsRepository } from './repositories/CommentsRepositories';
import { prismaCommentsRepository } from './repositories/implementations/PrismaCommentsRepositories';
import { CreateUsersRepository } from '../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../account/repositories/implementations/PrismaCreateUserRepository';
import { FindOneCommentService } from './services/findOne/findOne-comment.service';
import { FindAllCommentService } from './services/listAll/findAll-comment.service';
import { FindAllCommentResolver } from './resolvers/listAll/findAll-comment.resolver';
import { CreateCommentResolver } from './resolvers/create/create-comment.resolver';
import { FindOneCommentResolver } from './resolvers/findOne/findOne-comment.resolver';
import { RemoveCommentResolver } from './resolvers/remove/remove-comment.resolver';
import { UpdateCommentResolver } from './resolvers/update/update-comment.resolver';


@Module({
  controllers: [],
  providers: [
    CreateCommentService,
    FindOneCommentService,
    FindAllCommentService,
    UpdateCommentService,
    RemoveCommentService,


    CreateCommentResolver,
    FindOneCommentResolver,
    FindAllCommentResolver,
    RemoveCommentResolver,
    UpdateCommentResolver,

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
export class CommentModule {}
