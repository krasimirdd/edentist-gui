import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppointmentService} from '../../services/appointment.service';
import {Appointment} from '../../models/appointment';
import {MatDialog} from '@angular/material/dialog';
import {ListSingleAppointmentComponent} from '../list-single-appointment/list-single-appointment.component';

@Component({
  selector: 'app-track-appointment',
  styleUrls: ['./track-appointment.component.css'],
  templateUrl: './track-appointment.component.html',
})
export class TrackAppointmentComponent implements OnInit {
  toTrack: FormGroup;
  appointmentResult: Appointment;

  constructor(public router: Router, public appointmentService: AppointmentService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.toTrack = new FormGroup({
      codeForm: new FormControl('', [Validators.minLength(1), Validators.required]),
      emailForm: new FormControl('', [Validators.email, Validators.required])
    });

  }

  track(): void {

    this.appointmentService.getAppointment(this.toTrack.controls.emailForm.value, this.toTrack.controls.codeForm.value)
      .subscribe(
        value => {
          console.log(this.appointmentResult);

          this.appointmentResult = value;
          this.onResponse(this.appointmentResult);
        },
        error => alert('Can not find appointment with this code/email combination!')
      );
  }

  onResponse({date, doctor, id, medicalHistory, patient, prescription, service, status}: Appointment): void {

    const dialogRef = this.dialog.open(ListSingleAppointmentComponent, {
      width: '950px', height: '800px',
      data: {id, patient, service, medicalHistory, prescription, doctor, status, date: date.toString()}
    });

    dialogRef.afterClosed().subscribe(() => console.log('The dialog was closed'));
  }

}
