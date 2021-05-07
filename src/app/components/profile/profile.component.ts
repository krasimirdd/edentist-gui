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
    this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.authService.isLoggedIn();
    this.authService.doLogin();
    this.authenticatedUser = JSON.parse(localStorage.getItem('currentUser'));
    this.profileJsonStr = JSON.stringify(this.authenticatedUser, null, 2);
    this.role = this.authenticatedUser.role;
  }

  goTo(): void {
    const url = 'appointments';
    this.router.navigate([url]);
  }
}
