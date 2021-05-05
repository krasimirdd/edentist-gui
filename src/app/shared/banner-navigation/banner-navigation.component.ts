import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService as auth0 } from '@auth0/auth0-angular';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css'],
})
export class BannerNavigationComponent implements OnInit {
  logoutStatus = false;

  constructor(public auth: AuthService, public router: Router, private auth0Service: auth0) {
  }

  ngOnInit(): void {
  }

  loginClick() {
    this.auth0Service.loginWithRedirect();
  }

  newAppointment() {
    this.router.navigate(['/appointments']);
  }

  fun() {
    this.logoutStatus = !this.logoutStatus;
  }

  logoutClick() {
    this.auth.loginStatusService = false;
    this.logoutStatus = false;
    localStorage.clear();
    this.auth0Service.logout();
    this.router.navigate(['']);
  }
}
