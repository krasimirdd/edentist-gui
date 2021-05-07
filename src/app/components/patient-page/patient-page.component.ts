import {Component} from '@angular/core';
import {AuthenticatedUser} from '../../models/authenticatedUser';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent {

  authenticatedUser: AuthenticatedUser;
  img = 'assets/images/contact/2.jpg';

  constructor(private authService: AuthService) {
    if (this.authService.isLoggedIn()) {
      this.authenticatedUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  isLoggedIn(): boolean {
    if (this.authService.isLoggedIn()) {
      this.authenticatedUser = JSON.parse(localStorage.getItem('currentUser'));
      return true;
    }
    return false;
  }
}

