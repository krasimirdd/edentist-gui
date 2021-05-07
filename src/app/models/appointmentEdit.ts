import {Patient} from './patient';
import {Doctor} from './doctor';
import {Service} from './service';

export class AppointmentEdit {

  constructor(public id: number, public medicalHistory: string, public prescription: string,
              public date: Date, public service: Service, public patient: Patient, public doctor: Doctor, public status: string) {
    this.id = id;
    this.medicalHistory = medicalHistory;
    this.prescription = prescription;
    this.date = date;
    this.service = service;
    this.patient = patient;
    this.doctor = doctor;
    this.status = status;
  }

}
