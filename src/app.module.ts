import { Module } from '@nestjs/common';
import { CommentLikeModule } from './modules/comment-like/comment-like.module';
import { CommentModule } from './modules/comment/comment.module';
import { PostModule } from './modules/post/post.module';
import { PostLikeModule } from './modules/post-like/post-like.module';
import { UsersModule } from './modules/account/users.module';

import { FollowersModule } from './modules/followers/followers.module';

import { PassportModule } from '@nestjs/passport';
import { ApolloDriver, ApolloFederationDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { PrismaModule } from 'nestjs-prisma';

import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema/schema.gql'),
      sortSchema: true,
      playground: true,
      // context: ({ req, res }) => ({ req, res }),

      useFactory: (config: ConfigService) => ({ 
        formatError: (error) => {
          const originalError = error.extensions?.originalError;
          if (!originalError) {
            return {
              message: error.message,
              code: error.extensions?.code,
            };
          }
          return {
            message: originalError.message,
            code: error.extensions?.code,
          };
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({ isGlobal: true }),

    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),

    PrismaModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    CommentModule,
    PostModule,
    CommentLikeModule,
    PostLikeModule,
    FollowersModule,
    PassportModule.register({ session: true }),
  ],

  providers: [
    
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // }, 
    // {
    //   provide: APP_FILTER,
    //   useClass: GraphqlExceptionFilter,
    // },
    
    
  ],
})
export class AppModule {}
