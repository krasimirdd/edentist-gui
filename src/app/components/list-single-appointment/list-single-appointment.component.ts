import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Patient} from '../../models/patient';
import {Service} from '../../models/service';
import {Doctor} from '../../models/doctor';
import {DialogData} from '../../models/dialogData';

@Component({
    selector: 'app-list-single-appointment',
    templateUrl: './list-single-appointment.component.html',
    styleUrls: ['./list-single-appointment.component.css']
})
export class ListSingleAppointmentComponent {
    id: number;
    medHist: string;
    prescription: string;
    bloodType: string;
    date: Date;
    patient: Patient;
    doctor: Doctor;
    status: string;
    service: Service;

    constructor(
        public dialogRef: MatDialogRef<ListSingleAppointmentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {

        this.id = data.id;
        this.medHist = data.medicalHistory;
        this.bloodType = data.patient.bloodType;
        this.prescription = data.prescription;
        this.date = data.date;
        this.patient = data.patient;
        this.doctor = data.doctor;
        this.status = data.status;
        this.service = data.service;
    }

    onNoClick() {
        this.dialogRef.close();
    }
}
