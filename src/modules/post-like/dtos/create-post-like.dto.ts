import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreatePostLikeDto {
  @Field()
  @IsNotEmpty()
  postID: string;

  @Field({nullable: true})
  userID: string;
}
