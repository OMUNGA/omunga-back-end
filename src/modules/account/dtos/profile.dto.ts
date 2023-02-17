import { Follower, User } from '@prisma/client';

export type ProfileDTO = {
  user: User;
  followers: Follower[];
  following: Follower[];
};
