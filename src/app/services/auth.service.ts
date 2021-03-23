import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService as Auth0} from '@auth0/auth0-angular';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserClaims} from '../models/userClaims';

export class UserMetadata {
  // tslint:disable-next-line:variable-name
  constructor(public app_metadata: AppMetadata) {
  }
}

class AppMetadata {
  constructor(public role: string) {
  }
}

class Role {
  constructor(public role: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:8080/api/user';

  constructor(private httpClient: HttpClient) {
  }

  getRole(userEmail: string): Observable<Role> {
    return this.httpClient
      .get<Role>(`${(this.api)}/${userEmail}/role`, {observe: 'body'})
      .pipe(
        map(value => value)
      );

  }
}
