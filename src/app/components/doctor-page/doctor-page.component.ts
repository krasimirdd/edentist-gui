import {Component} from '@angular/core';
import {AuthenticatedUser} from '../../models/authenticatedUser';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent {

  authenticatedUser: AuthenticatedUser;

  constructor() {
    this.authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
  }
}
