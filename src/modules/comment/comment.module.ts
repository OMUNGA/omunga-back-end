import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateCommentController } from './controllers/create/create-comment.controller';
import { FindOneCommentController } from './controllers/findOne/findOne-comment.controller';
import { FindAllCommentController } from './controllers/listAll/findAll-comment.controller';
import { RemoveCommentController } from './controllers/remove/remove-comment.controller';
import { UpdateCommentController } from './controllers/update/update-comment.controller';
import { CreateCommentService } from './services/create/create-comment.service';

import { UpdateCommentService } from './services/update/update-comment.service';
import { RemoveCommentService } from './services/remove/remove-comment.service';
import { CommentsRepository } from './repositories/CommentsRepositories';
import { prismaCommentsRepository } from './repositories/implementations/PrismaCommentsRepositories';
import { CreateUsersRepository } from '../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../account/repositories/implementations/PrismaCreateUserRepository';
import { FindOneCommentService } from './services/findOne/findOne-comment.service';
import { FindAllCommentService } from './services/listAll/findAll-comment.service';

@Module({
  controllers: [
    CreateCommentController,
    FindOneCommentController,
    FindAllCommentController,
    RemoveCommentController,
    UpdateCommentController,
  ],
  providers: [
    CreateCommentService,
    FindOneCommentService,
    FindAllCommentService,
    UpdateCommentService,
    RemoveCommentService,

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
