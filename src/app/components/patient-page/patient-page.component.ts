import {Component} from '@angular/core';
import {AuthenticatedUser} from '../../models/authenticatedUser';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent {

  authenticatedUser: AuthenticatedUser;
  img = 'assets/images/contact/2.jpg';

  constructor() {
    this.authenticatedUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
