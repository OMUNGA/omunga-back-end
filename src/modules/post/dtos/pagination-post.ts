import { Field, ObjectType } from '@nestjs/graphql';
import { PostsOutput } from './posts.output';
import { Posts } from '../entities/post.entity';

@ObjectType()
export class PaginatedPosts {

  @Field(() => [PostsOutput])
  posts: PostsOutput[];

  @Field()
  totalPages: number;

  @Field()
  currentPage: number;

  @Field()
  totalPosts: number;
}
