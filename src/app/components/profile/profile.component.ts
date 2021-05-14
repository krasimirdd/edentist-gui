import {Component, OnInit} from '@angular/core';
import {AuthService as Auth0} from '@auth0/auth0-angular';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AuthenticatedUser} from '../../models/authenticatedUser';
import {Helpers} from '../../services/helpers';

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

    ngOnInit() {
        this.authService.isLoggedIn();
        this.authService.doLogin();
        this.authenticatedUser = Helpers.getAuthenticatedUser();
        this.profileJsonStr = Helpers.stringify(this.authenticatedUser);
        this.role = this.authenticatedUser.role;
    }

    toAppointments() {
        const url = 'appointments';
        this.router.navigate([url]);
    }
}
