import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService as auth0} from '@auth0/auth0-angular';
import {AuthenticatedUser} from '../models/authenticatedUser';
import {environment} from '../../environments/environment';

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
  private api = 'http://localhost:8080/api/user';
  private secret = environment.secret;

  public loginStatusService = false;

  constructor(private httpClient: HttpClient, private auth0Service: auth0) {
    console.log(this.secret);
    this.isLoggedIn();
  }

  getUserMetadata(userEmail: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Authorization', this.secret);

    return this.httpClient
      .get(
        `${(this.api)}/${userEmail}`,
        {
          observe: 'response',
          headers
        });
  }

  private registerUser(user: AuthenticatedUser) {
    const headers = new HttpHeaders().set('Authorization', this.secret);

    return this.httpClient
      .post<any>(
        this.api,
        user.email,
        {
          headers
        }
      ).pipe();
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
          .subscribe((res: HttpResponse<any>) => {
              const entity = res.body;
              authenticatedUser.role = entity.role;
              authenticatedUser.details = entity;
              localStorage.setItem('currentUser', JSON.stringify(authenticatedUser));
              localStorage.setItem('authorization', res.headers.get('authorization'));
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
}
