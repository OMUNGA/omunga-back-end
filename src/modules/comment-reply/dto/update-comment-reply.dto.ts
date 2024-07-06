import { InputType, Field } from "@nestjs/graphql";


@InputType()
export class UpdateReplyCommentDTO {
  @Field({nullable: true })
  id: string;

  @Field({nullable: true })
  commentID: string;

  @Field({nullable: true})
  userID: string;

  @Field({nullable: true })
  content: string;
}

