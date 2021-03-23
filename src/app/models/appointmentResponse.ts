import {Patient} from './patient';
import {Doctor} from './doctor';
import {Service} from './service';

export class AppointmentResponse {

  constructor(public date: Date, public patient: Patient, public doctor: Doctor, public service: Service) {
    this.date = date;
    this.patient = patient;
    this.doctor = doctor;
    this.service = service;
  }
}
