import {Component, OnInit} from '@angular/core';
import {AuthenticatedUser} from '../../models/authenticatedUser';
import {AuthService} from '../../services/auth.service';
import {Helpers} from '../../services/helpers';

@Component({
    selector: 'app-patient-page',
    templateUrl: './patient-page.component.html',
    styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit{

    authenticatedUser: AuthenticatedUser;

    constructor(private authService: AuthService) {
        if (this.authService.isLoggedIn()) {
            this.authenticatedUser = Helpers.getAuthenticatedUser();
        }
    }

    isLoggedIn(): boolean {
        if (this.authService.isLoggedIn()) {
            this.authenticatedUser = Helpers.getAuthenticatedUser();
            return true;
        }
        return false;
    }

    ngOnInit(): void {
    }
}

