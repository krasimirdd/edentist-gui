import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export class UserMetadata {
  // tslint:disable-next-line:max-line-length
  constructor(public id: number, public name: string, public email: string, public phone: string,
              public blood: string, public sex: string,
              public role: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:8080/api/user';

  constructor(private httpClient: HttpClient) {
  }

  // getRole(userEmail: string): Observable<Role> {
  //   return this.httpClient
  //     .get<Role>(`${(this.api)}/${userEmail}/role`, {observe: 'body'})
  //     .pipe(
  //       map(value => value)
  //     );
  //
  // }

  getUserMetadata(userEmail: string): Observable<UserMetadata> {
    return this.httpClient
      .get<UserMetadata>(`${(this.api)}/${userEmail}`, {observe: 'body'})
      .pipe(
        map(value => value)
      );
  }
}
