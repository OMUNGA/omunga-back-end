import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
import { VerifiedCallback } from 'passport-jwt';
import { LoginService } from 'src/modules/account/services/login/login.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly loginService: LoginService) {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: ['profile', 'email'],
    });
  }

  async validate(
    accessToken: string,
    refrashToken: string,
    profile: Profile,
    done: VerifiedCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile;

    const user = {
      email: emails[0].value,
      name: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };

    done(null, user);

    // const user = await this.loginService.validateUser({
    //   email: profile.emails[0].value,
    // });

    // done(null, user);

    console.log('Token', accessToken);
    console.log(refrashToken);
    console.log(user);
  }
}
