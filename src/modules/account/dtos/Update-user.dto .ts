import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserDTO {
  @Field({nullable: true})
  userID?: string;

  @Field({nullable: true})
  name: string;

  @Field({nullable: true})
  username: string;

  @Field({nullable: true})
  email: string;

  @Field({nullable: true})
  phone: string;


  @Field({nullable: true})
  bio: string;

  @Field({nullable: true})
  photo: string;

}
