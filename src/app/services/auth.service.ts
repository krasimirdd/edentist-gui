import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export class UserMetadata {
  constructor(public id: number, public name: string, public email: string, public phone: string,
              public blood: string, public sex: string,
              public role: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginStatusService = false;

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

  isLoggedIn() {
    if (localStorage.getItem('currentUser') !== null) {
      this.loginStatusService = true;
    }
  }
}
