import {UserMetadata} from '../services/auth.service';

export class AuthenticatedUser {
  public role: string;

  constructor(public nickname: string,
              public name: string,
              public picture: string,
              // tslint:disable-next-line:variable-name
              public updated_at: string,
              public email: string,
              // tslint:disable-next-line:variable-name
              public email_verified: boolean,
              public sub: string,
              public details: UserMetadata) {
  }
}

