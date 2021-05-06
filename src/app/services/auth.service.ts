import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService as auth0} from '@auth0/auth0-angular';
import {AuthenticatedUser} from '../models/authenticatedUser';

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

  constructor(private httpClient: HttpClient, private auth0Service: auth0) {
    this.isLoggedIn();
  }

  getUserMetadata(userEmail: string): Observable<UserMetadata> {
    return this.httpClient
      .get<UserMetadata>(`${(this.api)}/${userEmail}`, {observe: 'body'})
      .pipe(
        map(value => value)
      );
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('currentUser') !== null) {
      this.loginStatusService = true;
    }

    return this.loginStatusService;
  }

  doLogin() {
    let authenticatedUser: AuthenticatedUser;

    this.auth0Service.user$.subscribe(
      (profile) => {
        authenticatedUser = profile;
        this.getUserMetadata(authenticatedUser.email)
          .subscribe(value => {
              authenticatedUser.role = value.role;
              authenticatedUser.details = value;
              localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
            }, error => {
              this.registerUser(authenticatedUser).subscribe(
                () => {
                  localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
                }
              );
            }
          );
      }, error => {
        this.registerUser(authenticatedUser).subscribe(
          () => {
            localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
          }
        );

      }, () => {
        console.log(authenticatedUser);
        return authenticatedUser;
      }
    );
  }

  private registerUser(user: AuthenticatedUser) {
    return this.httpClient.post<any>(this.api, user.email).pipe();
  }
}
