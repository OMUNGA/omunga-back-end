import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github';
import { VerifiedCallback } from 'passport-jwt';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ['public_profile', 'email'],
    });
  }

  async validate(
    accessToken: string,
    refrashToken: string,
    profile: Profile,
    done: VerifiedCallback,
  ): Promise<any> {
    const { id, displayName, photos, emails } = profile;

    const user = {
      id: id,
      email: emails,
      name: displayName,
      picture: photos[0].value,
      accessToken,
    };

    done(null, user);
    console.log('Token', accessToken);
    console.log(refrashToken);
    console.log(user);
  }
}
