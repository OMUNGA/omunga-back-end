import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';
import { VerifiedCallback } from 'passport-jwt';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      scope: 'email',
      profileFields: ['emails', 'name'],
    });
  }

  async validate(
    accessToken: string,
    refrashToken: string,
    profile: Profile,
    done: VerifiedCallback,
  ): Promise<any> {
    const { id, name, emails, photos } = profile;

    const user = {
      id: id,
      email: emails[0].value,
      name: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };

    done(null, user);
  }
}
