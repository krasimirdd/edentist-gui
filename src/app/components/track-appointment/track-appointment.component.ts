import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    trackForm: FormGroup;
    appointmentResult: Appointment;

    constructor(public appointmentService: AppointmentService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.trackForm = new FormGroup({
            codeForm: new FormControl('', [Validators.minLength(1), Validators.required]),
            emailForm: new FormControl('', [Validators.email, Validators.required])
        });
    }

    toTrack() {

        this.appointmentService.getAppointment(this.trackForm.controls.emailForm.value, this.trackForm.controls.codeForm.value)
            .subscribe(value => {
                    this.appointmentResult = value;
                    this.onResponse(this.appointmentResult);
                }, error => alert('Can not find appointment with this code/email combination!')
            );
    }

    onResponse({date, doctor, id, medicalHistory, patient, prescription, service, status}: Appointment) {

        const dialogRef = this.dialog.open(ListSingleAppointmentComponent, {
            width: '950px', height: '800px',
            data: {id, patient, service, medicalHistory, prescription, doctor, status, date: date.toString()}
        });
    }

}
