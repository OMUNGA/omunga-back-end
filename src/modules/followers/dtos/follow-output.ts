import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class FollowingUser  {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  name: string;

  @Field()
  photo: string;
};

@ObjectType()
export class FollowerUser {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  name: string;

  @Field()
  photo: string;
}



@ObjectType()
export class FollowingResult  {
  @Field()
  id: string;

  @Field(() => FollowingUser)
  followingUser: FollowingUser;
};



@ObjectType()
export class FollowersResult {
  @Field()
  id: string;

  @Field(() => FollowerUser)  
  followerUser: FollowerUser;
};



