import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Patient} from '../../models/patient';
import {Service} from '../../models/service';
import {AppointmentService} from '../../services/appointment.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Doctor} from '../../models/doctor';
import {AppointmentEdit} from '../../models/appointmentEdit';

export interface DialogData {
  id: number;
  medicalHistory: string;
  prescription: string;
  date: Date;
  patient: Patient;
  doctor: Doctor;
  status: string;
  service: Service;
}

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent {
  id: number;
  medHist: string;
  prescription: string;
  date: Date;
  patient: Patient;
  doctor: Doctor;
  status: string;
  service: Service;

  availableServices: Service[];
  serviceFormGroup: FormGroup;
  nextFromGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private appointmentService: AppointmentService) {

    this.id = data.id;
    this.medHist = data.medicalHistory;
    this.prescription = data.prescription;
    this.date = data.date;
    this.patient = data.patient;
    this.doctor = data.doctor;
    this.status = data.status;
    this.service = data.service;

    this.appointmentService.getServices()
      .subscribe(value => this.availableServices = value);

    this.serviceFormGroup = new FormGroup({
      serviceEditForm: new FormControl(),
    // });
    // this.nextFromGroup = new FormGroup({
      _prescription: new FormControl(),
      _medhist: new FormControl()
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const serviceId = this.serviceFormGroup.controls.serviceEditForm.value;
    console.log(serviceId);
    const appointmentRequest = new AppointmentEdit(
      this.id,
      this.serviceFormGroup.controls._medhist.value,
      this.serviceFormGroup.controls._prescription.value,
      this.date,
      new Service(serviceId, ''),
      this.patient,
      this.doctor,
      this.status
    );

    console.log(appointmentRequest);
    this.appointmentService.updateAppointment(appointmentRequest)
      .subscribe(resp => {
        if (resp.status === 200) {
          location.reload();
        } else {
          alert(resp.statusText);
        }
      });

  }
}
