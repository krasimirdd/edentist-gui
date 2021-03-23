import {Patient} from './patient';
import {Doctor} from './doctor';
import {Service} from './service';

export class Appointment {
  constructor(a: Appointment, newStatus: string) {
    this.id = a.id;
    this.medicalHistory = a.medicalHistory;
    this.prescription = a.prescription;
    this.date = a.date;
    this.service = a.service;
    this.patient = a.patient;
    this.doctor = a.doctor;
    this.status = newStatus;
  }

  id: number;
  medicalHistory: string;
  prescription: string;
  date: Date;
  patient: Patient;
  doctor: Doctor;
  status: string;
  service: Service;
}

