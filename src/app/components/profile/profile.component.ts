import {Component, OnInit} from '@angular/core';
import {AuthService as Auth0} from '@auth0/auth0-angular';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AuthenticatedUser} from '../../models/authenticatedUser';

@Component({
  selector: 'app-profile',
  styleUrls: ['./profile.component.css'],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  authenticatedUser: AuthenticatedUser;
  profileJsonStr: string;
  role: string;

  constructor(public auth: Auth0, public authService: AuthService, public router: Router) {
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        this.authenticatedUser = profile;
        this.profileJsonStr = JSON.stringify(profile, null, 2);
        this.authService.getUserMetadata(this.authenticatedUser.email)
          .subscribe(value => {
              this.role = value.role;
              this.authenticatedUser.role = this.role;
              this.authenticatedUser.details = value;
              localStorage.setItem('authenticatedUser', JSON.stringify(this.authenticatedUser));
            }
          );
      }
    );

  }

  goTo(): void {
    const url = this.role + '/appointments';
    console.log(url);

    this.router.navigate([url]);
  }
}
