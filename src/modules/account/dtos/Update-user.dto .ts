import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserDTO {
  @Field()
  userID?: string;

  @Field()
  name: string;

  @Field()
  username: string;
  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  password: string;

  @Field()
  bio: string;

}
