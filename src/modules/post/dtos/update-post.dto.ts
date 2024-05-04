import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdatePostDto {

  @Field({nullable: true})
  title: string;


  @Field({nullable: true})
  content: string;

  @Field({nullable: true})
  cover: string;

  @Field(() => [String], {nullable: true})
  tags: string[];

  @Field({nullable: true})
  published?: boolean;

}
