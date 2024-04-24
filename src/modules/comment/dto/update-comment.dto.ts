import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateCommentDto {
  @Field()
  commentID: string;

  @Field({nullable: true })
  userID?: string;

  @Field({nullable: true })
  content?: string;
}
