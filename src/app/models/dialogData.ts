import {Patient} from './patient';
import {Doctor} from './doctor';
import {Service} from './service';

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
