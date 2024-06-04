import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';

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
import { CreatePostResolver } from './resolvers/create/create-post.resolver';
import { UpdatePostResolver } from './resolvers/update/update-post.resolver';
import { FindOnePostResolver } from './resolvers/findOne/findOne-post.resolver';
import { RemovePostResolver } from './resolvers/remove/remove-post.resolver';
import { SearchPostResolver } from './resolvers/search/search-post.resolver';
import { FindAllPostsResolver } from './resolvers/findAll/findAll-post.resolver';

import { findUnpublishedPostsService } from './services/findUnpublishedPosts/find-unpublished-posts.service';
import { findUnpublishedPostsResolver } from './resolvers/findUnpublishedPosts/find-unpublished-posts.resolver';
import { FindPostsByUserAndTitleResolver } from './resolvers/findPostsByUserAndTitle/find-posts-by-user-and-title.resolver';
import { FindPostsByUserAndTitleService } from './services/findPostsByUserAndTitle/find-posts-by-user-and-title.service';
import { FindByUserNamePostsResolver } from './resolvers/findByUserId/findByUserName-post.resolver';
import { FindbyUserNamePostService } from './services/findByUserID/findByUserName-post.service';

@Module({
  controllers: [],
  providers: [
    CreatePostService,
    UpdatePostService,
    FindOnePostService,
    FindAllPostService,
    RemovePostService,
    SearchPostService,
    FindbyUserNamePostService,
    findUnpublishedPostsService,
    FindPostsByUserAndTitleService,

    CreatePostResolver,
    UpdatePostResolver,
    FindOnePostResolver,
    FindAllPostsResolver,
    RemovePostResolver,
    SearchPostResolver,
    FindByUserNamePostsResolver,
    findUnpublishedPostsResolver,
    FindPostsByUserAndTitleResolver,

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
