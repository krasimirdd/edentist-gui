export class UserClaims {
  constructor(public aud: string,
              public exp: number,
              public iat: number,
              public iss: string,
              public nickname: string,
              public name: string,
              public picture: string,
              public nonce: string,
              // tslint:disable-next-line:variable-name
              public updated_at: string,
              public email: string,
              // tslint:disable-next-line:variable-name
              public email_verified: boolean,
              public sub: string,
              // tslint:disable-next-line:variable-name
              public __raw: string) {
  }
}
