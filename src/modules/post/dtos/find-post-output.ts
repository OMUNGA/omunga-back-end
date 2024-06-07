import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class FindPostInput{
  @Field()
  userName: string

  @Field()
  slug: string

  @Field({nullable: true})
  isAuthenticated: boolean
}