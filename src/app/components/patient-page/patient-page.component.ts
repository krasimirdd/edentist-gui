import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticatedUser} from '../../models/authenticatedUser';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent {

  authenticatedUser: AuthenticatedUser;

  constructor() {
    this.authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
  }
}
