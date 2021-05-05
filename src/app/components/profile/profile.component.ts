import {Component, OnInit} from '@angular/core';
import {AuthService as Auth0} from '@auth0/auth0-angular';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AuthenticatedUser} from '../../models/authenticatedUser';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppointmentService} from '../../services/appointment.service';

@Component({
  selector: 'app-profile',
  styleUrls: ['./profile.component.css'],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  authenticatedUser: AuthenticatedUser;
  profileJsonStr: string;
  role: string;
  toTrack: FormGroup;

  constructor(public auth: Auth0, public authService: AuthService, public router: Router, public appointmentService: AppointmentService) {
    this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.toTrack = new FormGroup({
      codeForm: new FormControl('', [Validators.minLength(1), Validators.required]),
      emailForm: new FormControl('', [Validators.email, Validators.required])
    });

    this.auth.user$.subscribe(
      (profile) => {
        this.authenticatedUser = profile;
        this.profileJsonStr = JSON.stringify(profile, null, 2);
        this.authService.getUserMetadata(this.authenticatedUser.email)
          .subscribe(value => {
              this.role = value.role;
              this.authenticatedUser.role = this.role;
              this.authenticatedUser.details = value;
              localStorage.setItem('currentUser', JSON.stringify(this.authenticatedUser));
            }
          );
      }
    );

  }

  goTo(): void {
    const url = 'appointments';
    this.router.navigate([url]);
  }

  track(): void {
    console.log(this.toTrack.controls.codeForm.value);
    console.log(this.toTrack.controls.emailForm.value);
  }

}
