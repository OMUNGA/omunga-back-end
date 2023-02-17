import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreatePostController } from './controllers/create/create-post.controller';
import { FindAllPostController } from './controllers/findAll/findAll-post.controller';
import { FindOnePostController } from './controllers/findOne/post.controller';
import { SearchPostController } from './controllers/search/search-post.controller';
import { UpdatePostController } from './controllers/update/update-post.controller';
import { RemovePostController } from './controllers/remove/remove-post.controller';
import { CreatePostService } from './services/create/create-post.service';
import { UpdatePostService } from './services/update/update-post.service';
import { FindOnePostService } from './services/findOne/findOne-post.service';
import { FindAllPostService } from './services/findAll/findAll-post.service';
import { RemovePostService } from './services/remove/remove-post.service';
import { SearchPostService } from './services/search/search-post.service';
import { PostRepository } from './repositories/postRepositories';
import { PrismaPostRepository } from './repositories/implementations/prismaPostRepositories';
import { CreateUsersRepository } from '../account/repositories/createUserRepository';
import { PrismaCreateUserRepository } from '../account/repositories/implementations/PrismaCreateUserRepository';

@Module({
  controllers: [
    CreatePostController,
    FindAllPostController,
    FindOnePostController,
    SearchPostController,
    UpdatePostController,
    RemovePostController,
  ],
  providers: [
    CreatePostService,
    UpdatePostService,
    FindOnePostService,
    FindAllPostService,
    RemovePostService,
    SearchPostService,

    {
      provide: PostRepository,
      useClass: PrismaPostRepository,
    },
    {
      provide: CreateUsersRepository,
      useClass: PrismaCreateUserRepository,
    },
  ],
  imports: [PrismaModule],
})
export class PostModule {}
